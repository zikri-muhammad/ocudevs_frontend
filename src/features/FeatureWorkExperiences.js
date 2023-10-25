import ItemWorkExperiences from "@/components/Item/WorkExperiences"

export default function FeatureWorkExperiences({ source }) {
    return (
        <div className="space-y-2 md:space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold">
                Work Experience
            </h2>
            <div className="space-y-4">
                {
                    source.length > 0 && source.map((item, i) => (
                        <ItemWorkExperiences
                            key={i}
                            title={item?.title}
                            company={item?.company}
                            startDate={item?.startDate}
                            endDate={item?.endDate}
                            location={item?.location}
                            typeWorking={item?.type_working}
                            responsibilities={item?.responsibilities}
                        />
                    ))
                }
            </div>
        </div>
    )
}