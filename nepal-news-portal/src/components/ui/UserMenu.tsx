"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, LogOut, Settings, Bell } from "lucide-react";
import { Button } from "./Button";
import { useAuth } from "@/hooks/useAuth";

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center space-x-2 hover:bg-red-50 dark:hover:bg-red-900/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name || ""}
            width={24}
            height={24}
            className="rounded-full"
          />
        ) : (
          <div className="flex justify-center items-center w-6 h-6 bg-red-100 rounded-full dark:bg-red-900/30">
            <User className="w-4 h-4 text-red-600 dark:text-red-400" />
          </div>
        )}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {user?.name?.split(" ")[0]}
        </span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 py-1 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                {user?.email}
              </p>
            </div>
            <Link
              href="/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="mr-2 w-4 h-4" />
              Profile Settings
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center px-4 py-2 w-full text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <LogOut className="mr-2 w-4 h-4" />
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
