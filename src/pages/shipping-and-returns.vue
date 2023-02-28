<template>
  <PageWrapper class="text-lg">
    <h3 class="text-center text-3xl font-bold">Shipping & Returns Information</h3>

    <h4 class="text-2xl mt-3 font-semibold">Purchase Process</h4>
    <ul class="list-disc ml-5 mt-2">
      <li>Promotional codes may not be combined and are not eligible for purchases of close out or open box bikes. Lithium Customs Bikes reserves the right to stop or pause all offers and promo codes at any time without warning.</li>
      <li>For all purchases, pre-orders and backorders, your credit/debit card will be charged immediately. There will be no delay in payment collection, regardless of when the item is expected to ship.</li>
      <li>If you are financing through Klarna please contact them directly to get your estimated monthly payments and to process any changes. </li>
      <li>Be sure to confirm your order is correct before completing the purchase, as fees will apply for any cancellations.</li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Order Processing Times</h4>
    <ul class="list-disc ml-5 mt-2">
      <li>Shipping and delivery times may vary. Typically, orders for in-stock items will be processed within 3-8 business days. We appreciate your patience as we are always committed to processing and shipping your order as quickly and safely as possible. </li>
      <li>Once your order has been processed, you will receive a confirmation email with shipment tracking information. This is just a rough estimate of your delivery date, for more real time updates contact FedEx directly.</li>
      <li>In some cases, a shipping confirmation may be slightly delayed even though the package is already on its way to you.</li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Shipping Methods</h4>
    <ul class="list-disc ml-5 mt-2">
      <li>Our bikes shipped within the contiguous United States qualify for FREE shipping. Additional shipping charges for Canada and Mexico will apply.</li>
      <li>Most of our bikes ship via FedEx GROUND.  Due to shipping limitations on lithium ion batteries, we aren’t able to offer expedited shipping services.</li>
      <li>Shipping information and policies only apply to North America. Unfortunately, at this time we do not ship to other countries.</li>
      <li>A signature will be required upon delivery of any order valued at $300 or higher. Any person in the household can sign for the delivery.</li>
      <li>Please have your valid government-issued photo ID ready at the time of delivery. Effective 06/28/22 FedEx will introduce scanning technology that electronically captures the recipient’s first initial, last name, and automatically verifies that age requirements are met for shipments requiring an adult signature at delivery. The software does not record or store any other personal data (e.g., driver’s license number, birthdate, home address, etc.).</li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Shipping Methods</h4>
    <ul class="list-disc ml-5 mt-2">
      <li>Before placing an order, be sure to verify that the product(s) you are looking to order is (are) correct.</li>
      <li>If your bike has already shipped and you have a FedEx tracking number, please contact <a class="text-blue" href="https://www.fedex.com/en-us/customer-support.html">FedEx</a> or use the <a class="text-blue" href="https://www.fedex.com/fdmenrollment/">FedEx Delivery Manager tool</a> to arrange any special requests or delivery instructions. Lithium Customs Bikes is unable to make any changes and/or special arrangements, including address changes, AFTER your order has been placed. If your order’s delivery address has an error, please contact us directly <router-link class="text-blue" to='/contact-us'>HERE</router-link> as soon as possible.</li>
      <li>Items smaller than bikes may ship by DHL/USPS, and you will also be able to <a class="text-blue" href="https://www.dhl.com/us-en/home/tracking.html">track your package</a>.</li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Order Cancellation/Returns</h4>
    <ul class="list-disc ml-5 mt-2">
      <li>A 15% processing fee will be applied for any order being returned or canceled.</li>
      <li>We cannot guarantee your order cancellation request will reach the shipping warehouse in time to stop your shipment, so please notify us as early as possible of your cancellation request.</li>
      <li>Make cancellation requests HERE and a support representative will calculate restocking fees on a per-item basis and provide confirmation if the order is eligible for cancellation. </li>
      <li>Refunds will be made to the method of payment used for the order. </li>
      <li>Pre-order items are eligible for 100% refund up to in-stock date. Once the item is in-stock it falls under the normal refund process. </li>
      <li>Unused bikes, parts, and accessories may be returned within 14 days of your receipt of the products by contacting us by email. </li>
      <li>To be eligible for a return, the item must be unused, free from dirt, dust, or any fragrances/odors, and in the same packaging and condition that you received it.</li>
      <li>The box must be sealed and unopened. Please ship your bike back in its original box. A 10% processing fee will be applied.</li>
      <li>Original shipping charges are non-refundable. Customers are responsible for ALL shipping costs if they elect to return or exchange their bike. </li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Open Box/Refurbished Bicycle Return Policy </h4>
    <ul class="list-disc ml-5 mt-2">
      <li>Open Box bikes and refurbished bicycles are sold “as is” and are not eligible for return.</li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Non-returnable items include, but are not limited to:</h4>
    <ul class="list-disc ml-5 mt-2">
      <li>Used, Undamaged Equipment</li>
      <li>Apparel (clothing, hats, etc)</li>
      <li>Battery Packs</li>
      <li>Helmets</li>
      <li>Special orders</li>
      <li>Gift cards</li>
      <li>Gifted orders</li>
      <li>Items that display wear</li>
      <li>For the purpose of warranty and returns, you are responsible for providing a return shipping box at your expense if you have discarded the original box in which the product was shipped</li>
      <li>PLEASE RETAIN YOUR BIKE BOX even if it has been damaged in shipping.</li>
      <li>ITEMS CANNOT BE RETURNED WITHOUT AUTHORIZATION FROM CUSTOMER SERVICE TEAM.</li>
      <li>If a return is received without an authorization code, the shipment is likely to be lost.  Lithium Customs Bikes accepts no responsibility for items returned to us without explicit authorization. </li>
    </ul>

    <h4 class="text-2xl mt-3 font-semibold">Returns of Defective Equipment </h4>
    <ul class="list-disc ml-5 mt-2 mb-8">
      <li>Defective equipment is covered by our warranty policy.</li>
      <li>Contact Lithium Customs Support to begin the warranty claims process.  Be sure to follow all Warranty Procedures and directions provided by a Lithium Customs Support Representative.</li>
    </ul>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';

useHead({
  title: 'Lithium Customs LLC | Shipping and returns',
  meta: [
    { name: 'description', content: 'Lithium Customs LLC, Shipping and returns' }
  ]
})
</script>

<style scoped>

</style>