import ItemEducation from "@/components/Item/Education";

export default function FeatureEducation({ source }) {

    return (
        <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold">
                Education
            </h2>
            <div className="space-y-4">
                {
                    source.length > 0 && source.map((item, i) => (
                        <ItemEducation
                            key={i}
                            department={item?.department}
                            typeEducation={item?.type_education}
                            university={item?.university}
                            startDate={item?.startDate}
                            endDate={item?.endDate}
                        />
                    ))
                }
            </div>
        </div>
    )
}