 export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

   // Phone validation (must start with + and contain only numbers)
 export   const validatePhone = (phone: string): boolean => {
      // Remove spaces for validation
      const cleanedPhone = phone.replace(/\s/g, "");
      // Must start with + and have 1-15 digits after
      const phoneRegex = /^\+[1-9]\d{1,14}$/;
      return phoneRegex.test(cleanedPhone);
    };