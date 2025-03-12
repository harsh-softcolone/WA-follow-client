import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router";

interface WhatsAppNumberVerificationProps {
  storedNumber: string;
  currentNumber: string;
  onSwitchNumber: () => void;
}

export function WhatsAppNumberVerification({
  storedNumber,
  currentNumber,
  onSwitchNumber,
}: WhatsAppNumberVerificationProps) {
  const navigate = useNavigate();
  const { handleResetAuth } = useAuth();

  const handleLogout = () => {
    handleResetAuth();
    navigate("/login");
  };

  return (
    <Card className="w-full max-w-[330px] shadow-sm bg-[var(--background)] text-[var(--foreground)] border-[var(--border)]">
      <CardContent className="p-4 pt-5">
        <h2 className="text-lg font-medium mb-4 text-[var(--heading)]">
          New WhatsApp Number?
        </h2>
        <Separator className="mb-4 bg-[var(--border)]" />

        <p className="text-sm mb-4 text-[var(--sub-heading)]">
          Looks like you're using Follow-client with a new WhatsApp Number.
        </p>

        <p className="text-sm mb-1 text-[var(--sub-heading)]">
          Your old WhatsApp Number is:
        </p>
        <p className="text-[var(--active-color)] font-medium mb-4">
          +{storedNumber}
        </p>

        <p className="text-sm mb-1 text-[var(--sub-heading)]">
          The current WhatsApp Number is:
        </p>
        <p className="text-[var(--active-color)] font-medium mb-4">
          +{currentNumber}
        </p>

        <p className="text-sm mb-4 text-[var(--sub-heading)]">
          You can use Follow-client with only 1 WhatsApp Number. If you wish to
          update the WhatsApp Number, click on "Switch Number".
        </p>

        <p className="text-sm mb-4 text-[var(--sub-heading)]">
          If you wish to use old WhatsApp Number, logout from WhatsApp and scan
          QR code with the same number.
        </p>

        <p className="text-sm text-[var(--sub-heading)]">
          If you want to login with different Follow-client account, click on
          logout from the right menu.
        </p>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button
          onClick={onSwitchNumber}
          className="bg-[var(--button)] hover:bg-[var(--button)]/90 text-white flex-1 border-none"
        >
          Switch Number
        </Button>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="flex-1 border-[var(--border)] text-[var(--foreground)] bg-transparent hover:bg-[var(--input)] hover:text-[var(--foreground)]"
        >
          Logout
        </Button>
      </CardFooter>
    </Card>
  );
}
