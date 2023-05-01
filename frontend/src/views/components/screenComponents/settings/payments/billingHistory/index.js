import React from "react";
import Status from "views/components/shared/status";
import TableSearchAndFilter from "views/components/shared/tableSearch";

const BillingHistory = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-[#515165] text-[18px] font-openSans_bold">
            Billing History
          </span>
        </div>
        <div>
          <TableSearchAndFilter />
        </div>
      </div>
      <div>
        <table className="min-w-full">
          <thead className="text-left text-[#515165] text-[12px] font-openSans_bold">
            <tr>
              <th className="pb-5 pt-2">Description</th>
              <th className="pb-5 pt-2">Item</th>
              <th className="pb-5 pt-2">Amount</th>
              <th className="pb-5 pt-2">Date & Time</th>
              <th className="pb-5 pt-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-left text-[#2A2A2A] text-[12px] font-openSans_regular divide-y divide-[#F5F5F5]">
            {Array.from({ length: 5 })?.map((item) => (
              <tr className="">
                <td className="pt-5 pb-3">Subscription Renewal</td>
                <td className="pt-5 pb-3">Gold Plan</td>
                <td className="pt-5 pb-3">$50.00</td>
                <td className="pt-5 pb-3">
                  <div>
                    <div>
                      <span className="text-[#2A2A2A] text-[12px] font-openSans_regular">
                        21-03-2021
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#515165] font-openSans_regular">
                        @ 8:45 PM
                      </span>
                    </div>
                  </div>
                </td>
                <td className="pt-5 pb-3">
                  <Status label="Sucess" type="success" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingHistory;
