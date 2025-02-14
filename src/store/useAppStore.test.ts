import { act, renderHook, waitFor } from "@testing-library/react";
import { useAppStore } from "./useAppStore";
import { Message } from "./chatStore";

describe("useAppStore Zustand Store", () => {
  // ✅ Reset Zustand State and localStorage Before Each Test
  beforeEach(() => {
    localStorage.clear();
    useAppStore.setState({
      messages: [
        { id: -1, text: "Hello! How can I assist you today?", sender: "bot" },
      ],
      toasts: [],
    });
  });

  // ✅ 1️⃣ Test Initial State
  it("should have default state", async () => {
    const { result } = renderHook(() => useAppStore());

    await waitFor(() => {
      expect(result.current.messages).toHaveLength(1);
      expect(result.current.messages[0].text).toBe(
        "Hello! How can I assist you today?",
      );
      expect(result.current.toasts).toHaveLength(0);
    });
  });

  // ✅ 2️⃣ Test Adding a Message
  it("should add a new message", async () => {
    const { result } = renderHook(() => useAppStore());

    await act(async () => {
      result.current.addMessage({
        id: Date.now(),
        text: "Hello World!",
        sender: "user",
      });
    });

    await waitFor(() => {
      expect(result.current.messages).toHaveLength(2);
      expect(result.current.messages[1].text).toBe("Hello World!");
    });
  });

  // ✅ 3️⃣ Test Message Persistence (localStorage)
  it("should store messages in localStorage", async () => {
    const { result } = renderHook(() => useAppStore());

    await act(async () => {
      result.current.addMessage({
        id: 1001,
        text: "Hello World!",
        sender: "user",
      });
      result.current.addMessage({
        id: 1002,
        text: "Persistent Message",
        sender: "bot",
      });
    });

    await waitFor(() => {
      const storedMessages = JSON.parse(
        localStorage.getItem("chatHistory") || "[]",
      );

      // ✅ Fix: Expect 3 messages (Initial bot message + 2 added messages)
      expect(storedMessages).toHaveLength(3);
      expect(storedMessages[2].text).toBe("Persistent Message");
    });
  });

  // ✅ 4️⃣ Test Loading Messages from LocalStorage
  it("should load messages from localStorage", async () => {
    const mockMessages: Message[] = [
      { id: 1, text: "Hello", sender: "user" },
      { id: 2, text: "Hi", sender: "bot" },
    ];
    localStorage.setItem("chatHistory", JSON.stringify(mockMessages));

    const { result } = renderHook(() => useAppStore());

    await act(async () => {
      result.current.loadMessages();
    });

    await waitFor(() => {
      expect(result.current.messages).toHaveLength(2);
      expect(result.current.messages[0].text).toBe("Hello");
      expect(result.current.messages[1].text).toBe("Hi");
    });
  });

  // ✅ 5️⃣ Test Adding a Toast
  it("should add a toast message", async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useAppStore());

    await act(async () => {
      result.current.addToast("This is a toast");
    });

    await waitFor(() => {
      expect(result.current.toasts).toHaveLength(1);
      expect(result.current.toasts[0].message).toBe("This is a toast");
    });

    // ✅ 6️⃣ Ensure toast is removed after 3 seconds
    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => {
      expect(result.current.toasts).toHaveLength(0);
    });

    jest.useRealTimers();
  });

  // ✅ 7️⃣ Test Removing a Toast Manually
  it("should remove a specific toast", async () => {
    const { result } = renderHook(() => useAppStore());

    await act(async () => {
      result.current.addToast("Toast to remove");
    });

    const toastId = result.current.toasts[0].id;

    await act(async () => {
      result.current.removeToast(toastId);
    });

    await waitFor(() => {
      expect(result.current.toasts).toHaveLength(0);
    });
  });
});
