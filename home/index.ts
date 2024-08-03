import type {Home} from "~/home/types";
import FundamentGroup from "~/home/fundament";
import type {Fundament} from "~/home/fundament/types";

export default class MyHome {
    public config: Home.Config
    public FundamentClass: Fundament.ConstructionClass
    public fundament3D: Fundament.Fundament3D

    private setFundamentClass(): void {
        const {fundamentConfig} = this.config
        this.FundamentClass = new FundamentGroup(fundamentConfig)
    }

    private setFundament3D(): void {
        this.fundament3D = this.FundamentClass.group3D
    }

    constructor(config: Home.Config) {
        this.config = config;
        this.setFundamentClass()
        this.setFundament3D()
    }
}
