"use server"

export async function submitContactForm(prevState: { success: boolean; message: string } | null, formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Here you would typically send the email or save to database
  console.log("Contact form submission:", { name, email, message })

  return {
    success: true,
    message: `Thank you ${name}! We'll get back to you soon.`,
  }
}
