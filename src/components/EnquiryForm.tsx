import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const categories = [
    "TVs & Displays",
    "Home Appliances",
    "Mobile Accessories",
    "Audio & Speakers",
    "Kitchen Appliances",
    "Other",
];

const EnquiryForm = () => {
    const [delivery, setDelivery] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast.success("Thank you! We'll get back to you shortly.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4" id="enquiry">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-1 block">Name *</label>
                    <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1 block">Phone *</label>
                    <Input id="phone" name="phone" type="tel" required placeholder="Phone number" />
                </div>
            </div>

            <div>
                <label htmlFor="category" className="text-sm font-medium text-foreground mb-1 block">Product Category</label>
                <Select>
                    <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea id="message" name="message" rows={3} placeholder="Tell us what you're looking for…" />
            </div>

            <div>
                <span className="text-sm font-medium text-foreground mb-2 block">Delivery Required?</span>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="delivery" value="yes" className="accent-accent" onChange={() => setDelivery("yes")} /> Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="delivery" value="no" className="accent-accent" onChange={() => setDelivery("no")} /> No
                    </label>
                </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90 transition">
                Send Enquiry / पूछताछ भेजें
            </Button>
        </form>
    );
};

export default EnquiryForm;
