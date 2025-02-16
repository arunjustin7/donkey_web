import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

function Plans() {
  return (
    <section className="container">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Flexible Subscriptions</h2>
          <p className="mt-2 text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Essential</CardTitle>
              <CardDescription>Perfect for regular users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$39/week</div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">1L fresh milk weekly</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Free delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Cancel anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
          <Card className="relative border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle>Monthly Box</CardTitle>
              <CardDescription>Best value for families</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$149/month</div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">5L fresh milk monthly</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Complimentary skincare product</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Priority delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">15% off additional products</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Quarterly Premium</CardTitle>
              <CardDescription>Luxury wellness package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$399/quarter</div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">15L fresh milk quarterly</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Full skincare set</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">VIP customer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">25% off additional products</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Plans
