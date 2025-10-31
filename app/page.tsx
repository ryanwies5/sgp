import { Construction } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Construction className="h-16 w-16 text-primary" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold">
            Under Construction
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            We&apos;re working hard to bring you something amazing. Our new
            website is currently under development and will be launching soon!
          </p>
          <p className="text-sm text-muted-foreground">
            Stay tuned for updates. We can&apos;t wait to share it with you!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
