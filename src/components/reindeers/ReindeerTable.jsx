import reindeerStore from "@/stores/reindeerStore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PencilIcon } from "lucide-react";
import { Trash2Icon } from "lucide-react";

export const ReeinderTable = () => {
  const reindeers = reindeerStore((state) => state.reindeers);
  const handleEdit = (name) => {
    console.log("Edit:", name);
    
  };

  const handleDelete = (name) => {
    console.log("Delete:", name);
    
  };
  return (
    <Table className="max-w-xs mx-auto">
      <TableCaption>
        A list of Santa's sleighs according to their alignment
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Alignment</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reindeers.map((reindeer) => (
          <TableRow>
            <TableCell>
              {reindeer.alignment}
            </TableCell>
            <TableCell>
              {reindeer.name}
            </TableCell>
            <TableCell className="flex flex-row items-center gap-x-2">
              <button onClick={() => handleEdit(reindeer.name)}>
                <PencilIcon className="text-yellow-800"/>
              </button>
              <button onClick={() => handleDelete(reindeer.name)}>
                <Trash2Icon className="text-red-800" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
