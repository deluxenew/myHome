import type {Home} from "~/home/types";
import FundamentGroup from "~/home/fundament";
import type {Fundament } from "~/home/fundament/types";
import FundamentConstruction from "~/home/fundament";

export default class MyHome implements Home.Construction {
    public config: Home.Config
    public fundamentClass: FundamentConstruction
    public fundament3D: Fundament.Fundament3D

    constructor(config: Home.Config) {
        this.config = config;
        const {fundament} = this.config
        this.fundamentClass = new FundamentGroup(fundament)
        this.fundament3D = this.fundamentClass.fundament3D
    }
}
