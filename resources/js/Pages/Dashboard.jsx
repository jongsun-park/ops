import Stat from "@/Components/UI/Stat";
import {
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from "@/Components/UI/TableWithBorder";
import Header from "@/Layouts/Header";
import Main from "@/Layouts/Main";
import {
  PuzzlePieceIcon,
  QueueListIcon,
  ScissorsIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";

/**
 *
 * TODO
 * 1. Dummy data to real data
 * 2. Production Order Status
 * 3. Urgency calculate when it's loaded
 * // 4. Stat Icon need to changed
 * 5. Table Row Link to each Production Order
 */

const SampleTable = ({ length = 10 }) => {
  const data = new Array(+length).fill("").map((item, idx) => ({
    pro_id: `pro_${idx}`,
    customer: `customer_${idx}`,
    due: `due_${idx}`,
    urgency: `urgency_${idx}`,
  }));

  return (
    <Table>
      <TableHead>
        <Tr>
          <Th>PRO #</Th>
          <Th>Customer</Th>
          <Th>Due</Th>
          <Th>Urgency</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {data.map(({ pro_id, customer, due, urgency }) => (
          <Tr key={pro_id}>
            <Td className="font-bold">{pro_id}</Td>
            <Td>{customer}</Td>
            <Td>{due}</Td>
            <Td>{urgency}</Td>
          </Tr>
        ))}
      </TableBody>
    </Table>
  );
};

const SectionHeader = ({ children }) => (
  <h2 className="flew-row align-center mb-2 flex items-center text-lg font-bold text-blue-600">
    {children}
  </h2>
);

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <Header>
        <h1 className="flex items-center text-3xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h1>
      </Header>
      <Main>
        <div className="grid gap-x-2 gap-y-2 sm:grid-cols-4">
          <Stat
            Icon={<PuzzlePieceIcon className="h-8 w-8" />}
            stat="999"
            title="Not Woven"
            href="#not_woven"
          />
          <Stat
            Icon={<ScissorsIcon className="h-8 w-8" />}
            stat="999"
            title="Not Cut"
            href="#not_cut"
          />
          <Stat
            Icon={<SwatchIcon className="h-8 w-8" />}
            stat="999"
            title="Not Stitched"
            href="#not_stitched"
          />
          <Stat
            Icon={<QueueListIcon className="h-8 w-8" />}
            stat="999"
            title="Not Finished"
            description="JE Only"
            href="#not_finished"
          />
        </div>
        <div className="mt-8 space-y-8">
          <div id="not_woven">
            <SectionHeader>
              <PuzzlePieceIcon className="mr-1 h-6 w-6" /> Not Woven
            </SectionHeader>
            <SampleTable length="5" />
          </div>
          <div id="not_cut">
            <SectionHeader>
              <ScissorsIcon className="mr-1 h-6 w-6" /> Not Cut
            </SectionHeader>
            <SampleTable length="5" />
          </div>
          <div id="not_stitched">
            <SectionHeader>
              <SwatchIcon className="mr-1 h-6 w-6" />
              Not Stitched
            </SectionHeader>
            <SampleTable length="5" />
          </div>
          <div id="not_finished">
            <SectionHeader>
              <QueueListIcon className="mr-1 h-6 w-6" /> Not Finished
            </SectionHeader>
            <SampleTable length="5" />
          </div>
        </div>
      </Main>
    </>
  );
}
