"use client";
import { useToast, Button } from "@chakra-ui/react";

export default function PromiseBasedToastExample() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        // Create an example promise that resolves in 5s
        const examplePromise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(200), 5000);
        });

        toast.promise(examplePromise, {
          success: {
            title: "Withdrawal Complete",
            description: "Thank you for the cash $$$",
          },
          error: {
            title: "cant get your moneyz",
            description: "Something bad happened",
          },
          loading: {
            title: "Accessing your bank account",
            description: "Please wait",
          },
        });
      }}
    >
      Click Me!
    </Button>
  );
}
