import { ServicesCards } from "@/components/services-cards";
import { SoftwareShowcase } from "@/components/software-showcase";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Badge } from "@/components/ui/badge";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export function ServicesSection () {
    return (
        <div className="py-20 min-h-screen relative">
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
        <BackgroundBeams/>
        </div>
        </div>
    )
}