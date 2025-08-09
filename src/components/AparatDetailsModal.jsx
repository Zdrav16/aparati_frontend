import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AparatDetailsModal({ kasaNo, open, onClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (open && kasaNo) {
      fetch(`http://localhost:8000/search/details/${kasaNo}`)
        .then((res) => res.json())
        .then(setData)
        .catch(console.error);
    }
  }, [open, kasaNo]);

  if (!data) return null;

  const { aparat, organization, dogovori, svidetelstva } = data;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogTitle>Детайли за апарат: {kasaNo}</DialogTitle>
        <Tabs defaultValue="org">
          <TabsList className="grid grid-cols-3 gap-2 mb-4">
            <TabsTrigger value="org">Организация</TabsTrigger>
            <TabsTrigger value="dogovori">Договори</TabsTrigger>
            <TabsTrigger value="svidetelstva">Свидетелства</TabsTrigger>
          </TabsList>

          <TabsContent value="org">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p><strong>Фирма:</strong> {organization?.corg}</p>
                <p><strong>ЕИК:</strong> {organization?.bulstat}</p>
                <p><strong>Тел.:</strong> {organization?.tel}</p>
              </div>
              <div>
                <p><strong>Обект:</strong> {aparat?.cobekt}</p>
                <p><strong>Адрес:</strong> {aparat?.address}</p>
                <p><strong>№ на апарат:</strong> {aparat?.kasa_no}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dogovori">
            {dogovori?.length === 0 ? (
              <p>Няма договори.</p>
            ) : (
              <ul className="space-y-2">
                {dogovori.map((d) => (
                  <li key={d.id} className="border p-2 rounded shadow">
                    № {d.dog_no} | {d.dot} - {d.ddo} | {d.company}
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>

          <TabsContent value="svidetelstva">
            {svidetelstva?.length === 0 ? (
              <p>Няма свидетелства.</p>
            ) : (
              <ul className="space-y-2">
                {svidetelstva.map((s) => (
                  <li key={s.id} className="border p-2 rounded shadow">
                    Свидетелство № {s.nsvid} от {s.dsvid} | {s.obekt}
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
