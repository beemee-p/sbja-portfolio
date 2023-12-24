"use client";
import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import styles from "@/styles/css/common/Modal.module.css";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const DISABLED_SCROLL_CLASSNAME = "disabled_scroll";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "content"> {
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

const Modal = ({
  children,
  disableBodyScroll = true,
}: {
  children: React.ReactNode;
  disableBodyScroll: boolean;
}) => {
  const router = useRouter();
  const clickedRef = useRef<EventTarget>();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  function handleClickClose(e: React.MouseEvent<HTMLElement>) {
    if (clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }

    e.stopPropagation();
    onClose();
  }

  useEffect(() => {
    const root = document.querySelector<HTMLDivElement>("#root");
    const app = document.querySelector<HTMLDivElement>("#app");

    if (root?.classList.contains(DISABLED_SCROLL_CLASSNAME)) {
      return;
    }
    root?.classList.add(DISABLED_SCROLL_CLASSNAME);

    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const hasScroll =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflowY = hasScroll ? "scroll" : "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.position = "absolute";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    if (app) {
      app.style.minHeight = "100%";
      app.style.height = "fit-content";
    }

    if (root) {
      root.style.overflow = "hidden";
      root.scrollTop = scrollTop;
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflowY = "";
      document.body.style.overflowX = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";

      if (app) {
        app.style.minHeight = "";
        app.style.height = "";
      }

      if (root) {
        root.style.overflow = "";
        root.scrollTop = 0;
      }

      document.documentElement.scrollTop = scrollTop;
      root?.classList.remove(DISABLED_SCROLL_CLASSNAME);
    };
  }, [disableBodyScroll]);

  return (
    <div
      className={`modal-outer ${styles.modal_outer}`}
      onMouseUp={handleClickClose}
    >
      <div className={styles.modal_wrap}>
        <div
          className={`modal-inner ${styles.modal_inner}`}
          onMouseDown={(e) => {
            clickedRef.current = e.target;
          }}
          onMouseUp={(e) => {
            clickedRef.current = e.target;
          }}
        >
          {children}

          <Button className={styles.modal_close_btn} onClick={handleClickClose}>
            <AiOutlineClose size={"24"} color="#000000" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
