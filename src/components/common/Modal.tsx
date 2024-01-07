"use client";
import React, {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import styles from "@/styles/css/common/Modal.module.css";
import { handleDisableBodyScroll } from "@/utils/scroll";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const DISABLED_SCROLL_CLASSNAME = "disabled_scroll";

export interface ModalProps {
  children: React.ReactNode;
  disableBodyScroll: boolean;
  closeIcon?: boolean;
}

const Modal = ({
  children,
  disableBodyScroll = true,
  closeIcon = false,
}: ModalProps) => {
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
    if (!disableBodyScroll) {
      return;
    }

    handleDisableBodyScroll();
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

          {closeIcon && (
            <Button
              className={styles.modal_close_btn}
              onClick={handleClickClose}
            >
              <AiOutlineClose size={"24"} color="#000000" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
