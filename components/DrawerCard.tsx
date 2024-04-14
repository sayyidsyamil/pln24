import React, { useState } from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { EvervaultCardDemo } from "./EvervaultCardDemo";


export function DrawerCard({ cardText, drawerDescription }) {
    const [open, setOpen] = useState(false);
  
    const handleCardClick = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

        return (
            <>
        <EvervaultCardDemo
          cardText={cardText}
          hoverText="Move your cursor over this card for a cool surprise. Click to see the details."
          onClick={handleCardClick}
        />
          <Dialog open={open} onOpenChange={setOpen}>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{cardText}</DialogTitle>
                <DialogDescription>
                  {drawerDescription}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          </>
        )
      }
    
     
    
  
 
