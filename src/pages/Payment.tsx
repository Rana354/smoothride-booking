
import { useParams } from "react-router-dom";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Payment() {
  const { bookingId } = useParams<{ bookingId: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Payment</h1>
            <p className="text-muted-foreground mb-8">
              Booking Reference: {bookingId}
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>Review your booking details before payment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rental Fee</span>
                  <span>$120.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Insurance</span>
                  <span>$25.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>$14.50</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span>$159.50</span>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  This is a placeholder payment page. In a complete implementation, 
                  this would contain a payment form with credit card or other payment options.
                </p>
              </CardFooter>
            </Card>
            
            <div className="flex gap-4">
              <Button className="btn-hover">
                Complete Payment
              </Button>
              <Link to="/dashboard">
                <Button variant="outline" className="btn-hover">
                  View All Bookings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
