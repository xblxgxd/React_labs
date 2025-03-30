import FirstBannerComp from "../../components/FirstBanner/firstBanner";
import CooperationBlockComp from "../../components/CooperationBlock/cooperationblock";
import SecondBannerComp from "../../components/SecondBanner/secondBanner";
import SectionContainerComp from "../../components/SectionContainer/sectionContainer";

const MainComp = () => {
    return(
        <div>
            <FirstBannerComp/>
            <CooperationBlockComp/>
            <SecondBannerComp/>
            <SectionContainerComp/>
        </div>
    )
}
export default MainComp;