import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import '../../styles/price-list/priceList.css';
import { MDBIcon } from 'mdbreact';

class PriceListTennis extends React.Component {

    render() {
        return(
            <div className='price-list'>
                <div className='bgTennisPrice-list'></div>
                <PricingTable  highlightColor='#2BBBAD'>
                    <PricingSlot highlighted onClick={()=> window.location='/reservation/tennis'} buttonText='RESERVE' title='BASIC' priceText='$5/hour/table'>
                        <PricingDetail> <MDBIcon icon="table-tennis" /> 1 table </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/tennis'} buttonText='RESERVE' title='EXTENDED' priceText='$13/3-hours/table'>
                        <PricingDetail> <MDBIcon icon="table-tennis" /> 1 table </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                    <PricingSlot  onClick={()=> window.location='/reservation/tennis'} buttonText='RESERVE' title='UNLIMIT' priceText='$45/full day/table'>
                        <PricingDetail> <MDBIcon icon="table-tennis" /> 1 table </PricingDetail>
                        <PricingDetail> <MDBIcon fab icon="angellist" /> full equipment </PricingDetail>
                        <PricingDetail> <MDBIcon icon="medkit" /> medical support </PricingDetail>
                    </PricingSlot>
                </PricingTable>
            </div>
        )
    }
}

export default PriceListTennis;