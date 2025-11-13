import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DashboardLayout from "@/layouts/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Eye, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Listeclient } from "@/database/data";
import {  useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";

interface Client {
  id: number;
  nom: string;
  email: string;
  telephone: number;
  montant: number;
}

const Client = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const clientParPage = 10;

  // Calcule d'indice
  const indexDernierClient = currentPage * clientParPage;
  const indexPremierClient = indexDernierClient - clientParPage;
  const ClientsActuelle = Listeclient.slice(
    indexPremierClient,
    indexDernierClient
  );

  // Calculer le nombre de page
  const totalPages = Math.ceil(Listeclient.length / clientParPage);

  // Fonctions de navigation
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between place-items-center mb-6">
          <h1 className="text-3xl text-slate-800 font-bold">Clients</h1>

          <Sheet>
            <SheetTrigger asChild>
              {/* <Button variant="outline">Open</Button> */}
              <Button className="cursor-pointer rounded-full">
                Ajouter un client
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Enregistrer un client</SheetTitle>
                {/* <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription> */}
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-name">Nom Complet</Label>
                  <Input id="sheet-demo-name" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Email</Label>
                  <Input type="email" id="sheet-demo-username"  />
                </div>
                  <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Telephone</Label>
                  <Input type="number" id="sheet-demo-username" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Enregister</Button>
                <SheetClose asChild>
                  <Button variant="outline">Fermer</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <Card>
          <CardHeader className="flex justify-between">
            <Input type="search" placeholder="Recherche" className="w-1/4" />

            <div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dark">A-Z</SelectItem>
                  <SelectItem value="system">Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Client;
