"use client";

import { useGlobalContext } from "@/app/_lib/context";

const LoginButton = (props: {
  className?: string
}) => {
  const { className } = props;
  const { setIsLoginModal } = useGlobalContext();
  return (
    <button
      type='button'
      className={className}
      onClick={() => {
        setIsLoginModal(true)
      }}>Login</button>
  )
}

export default LoginButton