import type { TickerData } from "@/types/market";
import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to subscribe to real-time ticker data for a market symbol.
 */
export function useMarketTicker(symbol: string) {
  const [data, setData] = useState<TickerData | null>(null);
  const [status, setStatus] = useState<"connecting" | "connected" | "disconnected">("connecting");
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;
    function connect() {
      setStatus("connecting");
      const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`);
      wsRef.current = ws;

      ws.onopen = () => {
        if (!isMounted) return;
        setStatus("connected");
      };
      ws.onmessage = (event) => {
        if (!isMounted) return;
        const msg = JSON.parse(event.data);
        setData({
          price: msg.c,
          priceChangePercent: msg.P,
          eventTime: msg.E,
        });
      };
      ws.onclose = () => {
        if (!isMounted) return;
        setStatus("disconnected");
        // Auto-reconnect after 2s
        reconnectTimeout.current = setTimeout(connect, 2000);
      };
      ws.onerror = () => {
        ws.close();
      };
    }
    connect();
    return () => {
      isMounted = false;
      wsRef.current?.close();
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
    };
  }, [symbol]);

  return { data, status };
}
