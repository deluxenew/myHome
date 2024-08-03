import type {Fundament} from "~/home/fundament/types";

export namespace Home {
    export interface Config  {
        name: string
        description: string
        fundament: Fundament.Config

    }
}
