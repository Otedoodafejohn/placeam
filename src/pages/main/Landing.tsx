
import Banner from '../../component/banner'
import { Category, Customerreview, Newsletter, Paymentplan, Promotion } from '../../component'

export default function Landing() {
  return (
    <div>
        <Banner />
        <Promotion/>
        <Category />
        <Paymentplan />
        <Customerreview />
        <Newsletter />

    </div>
  )
}
