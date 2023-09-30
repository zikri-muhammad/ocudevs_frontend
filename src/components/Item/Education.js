import Image from "next/image";

export default function ItemEducation({ department, typeEducation, university, startDate, endDate }) {

    return (
        <div className="w-full border-b-2 pb-4 pt-2 space-y-2">
            <div className="flex items-center justify-between">
                <div className="font-thin text-lg md:text-xl text-gray-600">
                    {department}
                </div>
                <div className="px-4 bg-success-light uppercase text-xs font-semibold text-success rounded-full py-1.5">
                    {typeEducation}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div className="flex items-center space-x-1">
                    <div className="h-6 w-6">
                        <Image alt="university" src={require("@/assets/icons/company.svg")} className="w-full h-full object-contain" />
                    </div>
                    <div className="text-xs text-gray-500">
                        {university}
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="h-6 w-6">
                        <Image alt="date" src={require("@/assets/icons/date.svg")} className="w-full h-full" />
                    </div>
                    <div className="text-gray-500 text-xs">
                        {startDate} - {endDate}
                    </div>
                </div>
            </div>
        </div>
    )
}