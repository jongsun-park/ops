const TableWithBorder = () => (
  <Table>
    <TableHead>
      <Tr>
        <Th>Name</Th>
        <Th>Date of Birth</Th>
        <Th>Role</Th>
        <Th>Salary</Th>
      </Tr>
    </TableHead>

    <TableBody>
      <Tr>
        <Td className="font-medium">John Doe</Td>

        <Td>24/05/1995</Td>
        <Td>Web Developer</Td>
        <Td>$120,000</Td>
      </Tr>

      <Tr>
        <Td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </Td>
        <Td>04/11/1980</Td>
        <Td>Web Designer</Td>
        <Td>$100,000</Td>
      </Tr>

      <Tr>
        <Td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </Td>
        <Td>24/05/1995</Td>
        <Td>Singer</Td>
        <Td>$20,000</Td>
      </Tr>
    </TableBody>
  </Table>
);

export const Table = ({ children }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      {children}
    </table>
  </div>
);

export const TableHead = ({ children }) => (
  <thead className="ltr:text-left rtl:text-right">{children}</thead>
);

export const TableBody = ({ children }) => (
  <tbody className="divide-y divide-gray-200">{children}</tbody>
);

export const Th = ({ children }) => (
  <th className="whitespace-nowrap px-4 py-2 text-left  text-gray-900">
    {children}
  </th>
);

export const Td = ({ children, className }) => (
  <td className={`whitespace-nowrap px-4 py-2  text-gray-900 ${className}`}>
    {children}
  </td>
);

export const Tr = ({ children }) => <tr>{children}</tr>;

export default TableWithBorder;
