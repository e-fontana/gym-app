"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { signUpFormSchema } from "@/utils/zod-schemas/signUpForm";

export function SignUpForm() {
  const signUpForm = useForm({
    resolver: zodResolver(signUpFormSchema),
  });

  return (
    <div>
      <FormProvider {...signUpForm}>
        <form>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <input type="password" name="confirmPassword" />
          <button type="submit">Sign Up</button>
        </form>
      </FormProvider>
    </div>
  );
}
