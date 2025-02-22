import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function EmergencyContact() {
  // In a real app, this data would come from an API or database
  const contact = {
    name: "John Doe",
    relationship: "Spouse",
    phone: "(555) 123-4567",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <Label>Name:</Label>
            <span>{contact.name}</span>
          </div>
          <div className="flex justify-between">
            <Label>Relationship:</Label>
            <span>{contact.relationship}</span>
          </div>
          <div className="flex justify-between">
            <Label>Phone:</Label>
            <span>{contact.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

