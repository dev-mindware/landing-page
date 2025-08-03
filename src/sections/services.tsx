import { ContainerTextFlip, Badge, ServicesCards, SoftwareShowcase } from "@/components";

export function ServicesSection () {
    return (
        <div className="py-20 min-h-screen relative" id="services">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
        <Badge variant={"secondary"} className="mb-4 text-background">
          Serviços
        </Badge>
        <ContainerTextFlip
            words={["Design Gráfico", "Web Design", "Desenvolvimento Web", "Aplicativos Móveis"]}
            />
        <div className="z-10">
        <ServicesCards />
        </div>
        <div className="mt-24 md:mt-0">
        <SoftwareShowcase />
        </div>
        </div>
        </div>
    )
}