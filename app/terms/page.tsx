import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>Karpathian Lighthouse Limited - Terms of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This website is operated by Karpathian Lighthouse Limited. Throughout the site, the terms "we", "us" and "our" refer to Lighthouse Limited. Lighthouse Limited offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="overview">
              <AccordionTrigger>Overview</AccordionTrigger>
              <AccordionContent>
                <p>By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.</p>
                <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services.</p>
                <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website.</p>
                <p>Our store is hosted on Wordpress. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section1">
              <AccordionTrigger>Section 1 - Accuracy, Completeness and Timeliness of Information</AccordionTrigger>
              <AccordionContent>
                <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.</p>
                <p>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section2">
              <AccordionTrigger>Section 2 - Services</AccordionTrigger>
              <AccordionContent>
                <p>Certain Services may be available exclusively online through the website. We reserve the right, but are not obligated, to limit the sales of our Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis.</p>
                <p>We do not warrant that the quality of any Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section3">
              <AccordionTrigger>Section 3 - Optional Tools</AccordionTrigger>
              <AccordionContent>
                <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement.</p>
                <p>Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section4">
              <AccordionTrigger>Section 4 - Third-Party Links</AccordionTrigger>
              <AccordionContent>
                <p>Certain content, products and Services available via our Service may include materials from third-parties.</p>
                <p>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties.</p>
                <p>We are not liable for any harm or damages related to the purchase of services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section5">
              <AccordionTrigger>Section 5 - User Comments, Feedback and Other Submissions</AccordionTrigger>
              <AccordionContent>
                <p>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.</p>
                <p>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section6">
              <AccordionTrigger>Section 6 - Personal Information</AccordionTrigger>
              <AccordionContent>
                <p>Your submission of personal information through the store is governed by our Privacy Policy, which can be viewed here: <a href="https://outperformagency.com/privacy-policy/" className="text-blue-600 hover:underline">https://outperformagency.com/privacy-policy/</a></p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section7">
              <AccordionTrigger>Section 7 - Errors, Inaccuracies and Omissions</AccordionTrigger>
              <AccordionContent>
                <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
                <p>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section8">
              <AccordionTrigger>Section 8 - Prohibited Uses</AccordionTrigger>
              <AccordionContent>
                <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:</p>
                <ul className="list-disc pl-6">
                  <li>for any unlawful purpose;</li>
                  <li>to solicit others to perform or participate in any unlawful acts;</li>
                  <li>to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances;</li>
                  <li>to infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
                  <li>to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;</li>
                  <li>to submit false or misleading information;</li>
                  <li>to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet;</li>
                  <li>to collect or track the personal information of others;</li>
                  <li>to spam, phish, pharm, pretext, spider, crawl, or scrape;</li>
                  <li>for any obscene or immoral purpose; or</li>
                  <li>to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet.</li>
                </ul>
                <p>We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section9">
              <AccordionTrigger>Section 9 - Disclaimer of Warranties; Limitation of Liability</AccordionTrigger>
              <AccordionContent>
                <p>We do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.</p>
                <p>You agree that from time to time we may remove the Service for indefinite periods of time or cancel the Service at any time, without notice to you.</p>
                <p>You expressly agree that your use of, or inability to use, the Service is at your sole risk. The Service and all products and Services delivered to you through the Service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
                <p>In no case shall Karpathian Lighthouse Limited, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, Service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the Service or any products procured using the Service, or for any other claim related in any way to your use of the Service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the Service or any content (or product) posted, transmitted, or otherwise made available via the Service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section10">
              <AccordionTrigger>Section 10 - Indemnification</AccordionTrigger>
              <AccordionContent>
                <p>You agree to indemnify, defend and hold harmless Karpathian Lighthouse Limited and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, Service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section11">
              <AccordionTrigger>Section 11 - Severability</AccordionTrigger>
              <AccordionContent>
                <p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section12">
              <AccordionTrigger>Section 12 - Termination</AccordionTrigger>
              <AccordionContent>
                <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
                <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>
                <p>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section13">
              <AccordionTrigger>Section 13 - Entire Agreement</AccordionTrigger>
              <AccordionContent>
                <p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
                <p>These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitutes the entire agreement and understanding between you and us and governs your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>
                <p>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section14">
              <AccordionTrigger>Section 14 - Governing Law – Jurisdiction</AccordionTrigger>
              <AccordionContent>
                <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Cyprus.</p>
                <p>For any dispute that may arise with regard to the execution and interpretation of any purchase of a service according to the Terms, the Courts of Cyprus are defined as exclusively competent.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="section15">
              <AccordionTrigger>Section 15 - Changes to Terms of Service</AccordionTrigger>
              <AccordionContent>
                <p>You can review the most current version of the Terms of Service at any time at this page.</p>
                <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="section16">
              <AccordionTrigger>Section 16 - Contact Information</AccordionTrigger>
              <AccordionContent>
                <p>Questions about the Terms of Service should be sent to us at hello@outperform.com.</p>
                <p>Our contact information is posted below:</p>
                <p>Karpathian Lighthouse Limited</p>
                <p>Michael Koutsofta 1</p>
                <p>3031 Limassol</p>
                <p>Cyprus</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfService;