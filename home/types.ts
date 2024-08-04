import type {Fundament} from "~/home/fundament/types";

export namespace Home {
    export interface Config  {
        name: string
        description: string
        fundament: Fundament.Config
    }

    export interface Construction {
        config: Config
        fundamentClass: Fundament.Construction
        fundament3D: Fundament.Fundament3D
    }
}
