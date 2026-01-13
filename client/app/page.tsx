import { Button } from "@/components/ui/button"
import LoginPage from "./(auth)/login/page"
 
export default function Home() {
  return <div className="shady-background min-h-screen flex flex-col justify-center ">
    <LoginPage/>
  </div>
}