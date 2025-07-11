"use client";

import { useState, useId } from "react";
import { CloseIcon, MenuIcon } from "../ui/Icons";
import { motion, AnimatePresence } from "motion/react";
import { NAVBAR_ITEMS } from "@/lib/constants";
import Link from "next/link";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex lg:hidden">
        <input type="checkbox" id={menuId} hidden />
        <button
          aria-label="Toggle menu"
          className="cursor-pointer p-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          onClick={handleMenuOpen}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-full bg-primary z-50 shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between py-4 px-6 border-b border-gray-700">
              <span className="text-white font-bold text-xl">Menú</span>
              <button
                onClick={handleMenuOpen}
                className="text-white p-2 hover:bg-orange-500 hover:bg-opacity-10 rounded-full"
              >
                <CloseIcon />
              </button>
            </div>

            <motion.ul
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex-1 p-6 space-y-3 overflow-y-auto h-full"
            >
              {NAVBAR_ITEMS.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="text-white hover:bg-orange-500 hover:bg-opacity-10 block p-4 rounded-lg text-lg font-medium transition-colors duration-200"
                    onClick={handleMenuOpen}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
