import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { EditIcon } from "lucide-react";
export function EditModal({ name, value, type }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <EditIcon
            className="inline-block ml-6 text-primary-red font-bold cursor-pointer hover:text-primary-red/50 transition duration-300 ease-in-out"
            size={24}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary-red">Update {name}</DialogTitle>
          <DialogDescription>Update your {name} here</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={value}
              type={type}
              placeholder={`Enter your ${name}`}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>

          <Button
            type="submit"
            className="bg-primary-red hover:bg-primary-red/70"
          >
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
