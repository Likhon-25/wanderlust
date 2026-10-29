"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Destination } from "@/components/site/destination-card";

// const initialForm = {
//   name: "",
//   country: "",
//   category: "",
//   price: "",
//   duration: "",
//   departureDate: "",
//   imageUrl: "",
//   description: "",
// };

const EditDestinationDialog = ({
  destination,
}: {
  destination: Destination;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: destination.name,
    country: destination.country,
    category: destination.category,
    price: destination.price,
    duration: destination.duration,
    departureDate: destination.departureDate,
    imageUrl: destination.imageUrl,
    description: destination.description,
  });

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:5000/destination/${destination._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      },
    );
    const data = await response.json();
    // const result = await response.json();
    console.log(form);
    console.log(data);

    if (response.ok) {
      setOpen(false);
      router.refresh();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button type="button" variant="outline">
          <Pencil />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className={"min-w-xl"}>
        <DialogHeader>
          <DialogTitle>Edit Destination</DialogTitle>
          <DialogDescription>
            <form
              onSubmit={handleSubmit}
              onReset={() =>
                setForm({
                  name: destination.name,
                  country: destination.country,
                  category: destination.category,
                  price: destination.price,
                  duration: destination.duration,
                  departureDate: destination.departureDate,
                  imageUrl: destination.imageUrl,
                  description: destination.description,
                })
              }
              className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="name">Destination Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(event) => updateForm("name", event.target.value)}
                    placeholder="Bali Paradise"
                    required
                    className="border-transparent bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={(event) =>
                      updateForm("country", event.target.value)
                    }
                    placeholder="Indonesia"
                    required
                    className="border-transparent bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={form.category}
                    onChange={(event) =>
                      updateForm("category", event.target.value)
                    }
                    className="h-8 w-full rounded-lg border-transparent bg-muted px-2.5 text-sm outline-none focus:ring-3 focus:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option>Beach</option>
                    <option>Mountain</option>
                    <option>City</option>
                    <option>Adventure</option>
                    <option>Cultural</option>
                    <option>Wildlife</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="price">Price (USD)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="1"
                    step="0.01"
                    value={form.price}
                    onChange={(event) =>
                      updateForm("price", event.target.value)
                    }
                    placeholder="e.g., 1299"
                    required
                    className="border-transparent bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={form.duration}
                    onChange={(event) =>
                      updateForm("duration", event.target.value)
                    }
                    placeholder="e.g., 7 Days/6 Nights"
                    required
                    className="border-transparent bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="departureDate">Departure Date</Label>
                  <Input
                    id="departureDate"
                    name="departureDate"
                    type="date"
                    value={form.departureDate}
                    onChange={(event) =>
                      updateForm("departureDate", event.target.value)
                    }
                    required
                    className="border-transparent bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    value={form.imageUrl}
                    onChange={(event) =>
                      updateForm("imageUrl", event.target.value)
                    }
                    placeholder="https://example.com/image.jpg"
                    required
                    className="border-transparent bg-muted"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={(event) =>
                      updateForm("description", event.target.value)
                    }
                    placeholder="Describe the travel experience..."
                    required
                    className="min-h-24 border-transparent bg-muted"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3">
                <Button
                  type="reset"
                  variant="outline"
                  className="border-destructive/40 bg-background text-destructive hover:border-destructive/50 hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 />
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-brand text-white hover:bg-brand/90"
                >
                  <Save />
                  Edit Travel Package
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditDestinationDialog;
