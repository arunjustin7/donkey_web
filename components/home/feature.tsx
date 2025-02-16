import { Leaf, Shield, Truck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

function Feature() {
  return (
    <section className="container mt-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Quality Guaranteed</h3>
              <p className="text-sm text-muted-foreground">Lab tested and certified pure</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Fresh to your doorstep</p>
            </div>
          </CardContent>
        </Card>
        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="flex items-center gap-4 p-6">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold">Sustainable Practices</h3>
              <p className="text-sm text-muted-foreground">Eco-friendly farming</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Feature
