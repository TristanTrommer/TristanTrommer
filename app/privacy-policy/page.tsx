import type {Metadata} from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy',
  robots: {
    index: false,
    follow: false,
  }
}

export default function Page() {
  const encodedEmail = ['hi', 'tristantrommer.com'];

  return (
    <main className='flex flex-col items-center px-4'>
      <section
        className='mt-24 mb-24 w-full max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        id='about'
      >
        <h1 className='text-4xl font-medium mb-8 text-center'>Privacy Policy</h1>
        <p>
          <h3 className='text-3xl font-medium mb-4'>Introduction</h3>
          This website is operated by: Tristan Trommer<br/><br/>
          It is very important to us to handle the data of our website visitors with confidence and to protect them in
          the best possible way. For this reason, we make every effort to comply with the requirements of the GDPR.
          Below we explain how we process your data on our website. We use language that is as clear and transparent as
          possible so that you really understand what happens to your data.<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>General Information</h3>
          <h4 className='text-2xl font-medium mb-4'>Processing of personal data and other terms</h4>
          Data protection applies to the processing of personal data. Personal data means all data with which you can be
          personally identified. This is, for example, the IP address of the device (PC, laptop, smartphone, etc.) in
          front of which you are currently sitting. Such data is processed when &apos;something happens to it&apos;.
          Here, for example, the IP is transmitted from the browser to our provider and stored there automatically. This
          is then a processing (according to Art. 4 No. 2 GDPR) of personal data (according to Art. 4 No. 1 GDPR). These
          and other legal definitions can be found in Art. 4 GDPR.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Applicable regulations/laws - GDPR, BDSG and TDDDG</h4>
          The scope of data protection is regulated by laws. In this case, these are the GDPR (General Data Protection
          Regulation) as a European regulation and the BDSG (Federal Data Protection Act) as a national law. In
          addition, the TDDDG supplements the provisions of the GDPR as far as the use of cookies is
          concerned.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>The responsible</h4>
          The controller within the meaning of the GDPR is responsible for data processing on this website. This is the
          natural or legal person who alone or jointly with others determines the purposes and means of the processing
          of personal data.<br/><br/>
          You can reach the responsible person under:<br/>
          Tristan Trommer<br/>
          Emsdettener Str. 10, c/o Postflex #3424<br/>
          48268 Greven, North Rhine-Westphalia<br/>
          Germany<br/>
          Email: <Link
          href={`mailto:${encodedEmail[0]}@${encodedEmail[1]}`}>{`${encodedEmail[0]}@${encodedEmail[1]}`}</Link><br/><br/>

          <h4 className='text-2xl font-medium mb-4'>This is how data is basically processed on this website</h4>
          As we have already established, there is data (e.g. IP address) that is collected automatically. This data is
          mainly required for the technical provision of the website. If we also use personal data or collect other
          data, we will inform you of this or ask for your consent. Other personal data you share with us consciously.
          You will find more detailed information below.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Your rights</h4>
          The GDPR provides you with comprehensive rights. These include, for example, free information about the
          origin, recipient and purpose of your stored personal data. You can also request the rectification, blocking
          or erasure of this data or lodge a complaint with the competent data protection supervisory authority. You can
          revoke your consent at any time. You can find out in detail what these rights are and how to exercise them in
          the last section of this Privacy Policy.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Data protection - Our view</h4>
          Data protection is more than just a chore for us! Personal data is of great value and careful handling of this
          data should be a matter of course in our digitalized world. In addition, you as a website visitor should be
          able to decide for yourself what &apos;happens&apos; to your data, when and by whom. Therefore, we undertake
          to comply with all legal provisions, collect only the data necessary for us and, of course, treat them
          confidentially.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Disclosure and deletion</h4>
          The transfer and deletion of data are also important and sensitive topics. Therefore, we would like to briefly
          inform you in advance about our general approach to this. A transfer of data only takes place on the basis of
          a legal basis and only if this is unavoidable. This may be the case in particular if it is a so-called Data
          Processor and a Data Processing Agreement has been concluded in accordance with Art. 28 GDPR. We delete your
          data when the purpose and the legal basis for processing cease to exist and the deletion is not contrary to
          any other legal obligations. A &apos;good&apos; overview of this is also provided by Art. 17 GDPR. For further
          information, please refer to this Privacy Policy and contact the responsible person if you have any specific
          questions.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Hosting</h4>
          This website is hosted externally. The personal data collected on this website is stored on the host&apos;s
          servers. This includes the automatically collected and stored log files (see below for more details), as well
          as all other data provided by website visitors. External hosting is used for the purpose of secure, fast and
          reliable provision of our website and in this context serves to fulfill the contract with our potential and
          existing customers. The legal basis for the processing is Art. 6 para. 1 lit. a, b and f GDPR, as well as § 25
          para. 1 TDDDG, insofar as consent includes the storage of cookies or access to information in the terminal
          device of the website visitor or user within the meaning of the TDDDG. Our hoster only processes data that is
          necessary for the fulfillment of its service obligation and acts as our Data Processor, which means that it is
          subject to our instructions. We have concluded a corresponding Data Processing Agreement with our hoster. We
          use the following hoster: Cloudflare, Inc., 101 Townsend St., San Francisco, California 94107, USA (<Link
          href='https://www.cloudflare.com/privacypolicy/'
          target='_blank'>https://www.cloudflare.com/privacypolicy/</Link>)<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Legal basis</h4>
          The processing of personal data always requires a legal basis. The GDPR provides for the following
          possibilities in Art. 6 (1) Sentence 1:
          <ul>
            <li>The data subject has given his/her consent to the processing of personal data concerning him/her for one
              or more specific purposes;
            </li>
            <li>the processing is necessary for the performance of a contract to which the data subject is party or for
              the implementation of pre-contractual measures taken at the data subject&apos;s request;
            </li>
            <li>the processing is necessary for compliance with a legal obligation to which the responsible person is
              subject to;
            </li>
            <li>the processing is necessary in order to protect the vital interests of the data subject or another
              natural person;
            </li>
            <li>the processing is necessary for the performance of a task carried out in the public interest or in the
              exercise of official authority vested in the responsible was transferred;
            </li>
            <li>the processing is necessary for the purposes of safeguarding the legitimate interests of the responsible
              or of a third party necessary, unless the interests or fundamental rights and freedoms of the data subject
              which require the protection of personal data override this, in particular where the data subject is a
              child.
            </li>
          </ul><br/>
          In the following sections, we will provide you with the specific legal basis for the respective
          processing.<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>What happens on our website</h3>
          By visiting our website, we process personal data about you. To protect this data as best as possible against
          unauthorized access by third parties, we use SSL or TLS encryption. You can recognize this encrypted
          connection by the fact that a https:// or a lock symbol is displayed in the address bar of your browser. In
          the following, you will learn which data is collected when you visit our website, for what purpose this is
          done and on what legal basis.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Data collection when calling up the website</h4>
          By calling up the website, information is automatically stored in so-called server log files. This is the
          following information:
          <ul>
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Host name of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul><br/>
          This data is temporarily required in order to be able to display our website to you permanently and without
          problems. In particular, this data serves the following purposes:
          <ul>
            <li>System security of the website</li>
            <li>System stability of the website</li>
            <li>Website troubleshooting</li>
            <li>Connecting to the website</li>
            <li>Website presentation</li>
          </ul><br/>
          The data processing is carried out in accordance with Art. 6 para. 1 lit. f GDPR and is based on our
          legitimate interest in the processing of this data, in particular the interest in the functionality of the
          website as well as its security. If possible, this data is stored pseudonymously and deleted after the
          respective purpose has been achieved. Insofar as the server log files allow the identification of the person
          concerned, the data is stored for a maximum period of 14 days. An exception exists if a security-relevant
          event occurs. In this case, the server log files are stored until the elimination and final clarification of
          the security-relevant event. For the rest, a consolidation with other data does not take place.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Cookies</h4>
          This website uses so-called cookies. This is a data record, information that is stored in the browser of your
          terminal device and is related to our website. By setting cookies, the navigation of the website in particular
          can be made easier for the visitor. We use technically necessary cookies on this website to ensure that our
          website functions without errors and in accordance with applicable laws. They help to make the website
          user-friendly. Some functions of our website cannot be displayed without the use of cookies. The legal basis
          for this is, depending on the individual case, Art. 6 para. 1 lit. b, c and/or f GDPR.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Data processing through user input</h4>
          When you contact us by email, we process your email address and any other data contained in the email. This
          data is stored on the mail server and in some cases on the respective end devices. Depending on the request,
          the legal basis for this is regularly Art. 6 para. 1 lit. f GDPR or Art. 6 para. 1 lit. b GDPR. The data will
          be deleted as soon as the respective purpose no longer applies and it is possible in accordance with the legal
          requirements. We offer a contact form. This is used to contact our company. In this form, we usually process
          your name, your e-mail address and the content of the message. The data is stored on our web server and
          forwarded internally to the relevant e-mail addresses. The legal basis for data processing is Art. 6 para. 1
          lit. f GDPR, as we have a legitimate interest in responding to your request and in an uncomplicated way of
          contacting you. If the contact is aimed at the conclusion of a contract, the additional legal basis for the
          processing is Art. 6 para. 1 lit. b GDPR. We delete this data no later than 3 months after receipt, unless it
          is required for a contractual relationship that has arisen. The contact form on our website is based on our
          own development. A data transfer to third parties does not take place.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Analysis and tracking tools</h4>
          We integrate the Cloudflare Web Analytics service on our website. This is a service of Cloudflare, Inc., 101
          Townsend St., San Francisco, California 94107, USA (<Link href='https://www.cloudflare.com/privacypolicy/'
                                                                    target='_blank'>https://www.cloudflare.com/privacypolicy/</Link>).
          Cloudflare Web Analytics allows us to get important statistics about website usage. It allows us to retrieve
          the most important hostnames, URLs, countries and other important metrics like status codes. Also, traffic
          spikes can be analyzed. No client-side information, such as that collected using cookies or localStorage, is
          used by Cloudflare. Cloudflare Web Analytics does not set cookies, does not collect personal information and
          does not track visitors across different websites. The legal basis for the processing is Art. 6 (1) lit. f
          GDPR. We have a legitimate interest in the anonymized analysis to ensure the technical stability of our
          website. If data is transferred to the USA, the standard contractual clauses (SCC) of the EU Commission apply
          to ensure an appropriate level of data protection. More information: <Link
          href='https://www.cloudflare.com/trust-hub/gdpr/'
          target='_blank'>https://www.cloudflare.com/trust-hub/gdpr/</Link>.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Third-party content</h4>
          We use the Cloudflare Turnstile service. This service of Cloudflare, Inc., 101 Townsend St., San Francisco,
          California 94107, USA (<Link href='https://www.cloudflare.com/privacypolicy/'
                                       target='_blank'>https://www.cloudflare.com/privacypolicy/</Link>). Cloudflare
          Turnstile enables a CAPTCHA-free experience on the website. In addition, Turnstile prevents misuse and
          confirms that website visits are genuine. No data is collected for the retargeting of advertisements. For
          Apple devices with the latest macOS or iOS versions, validation is performed via private access tokens without
          collecting or storing any personal data other than user agent and browser properties, which means that no data
          is passed on to Cloudflare or third parties. For users of other devices, however, Cloudflare Turnstile
          collects personal data such as the IP address and shares it with the provider in the USA. The legal basis for
          the processing is Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG. Consent can be revoked at any time. In
          the case of data transfer to the USA, the standard contractual clauses (SCC) of the EU Commission apply. More
          information: <Link href='https://www.cloudflare.com/trust-hub/gdpr/'
                             target='_blank'>https://www.cloudflare.com/trust-hub/gdpr/</Link>.<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Your rights</h3>
          Finally, we would like to inform you in detail about your rights and how you will be informed about changes in
          data protection requirements.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right to information according to Art. 15 GDPR</h4>
          You can request information about whether your personal data is being processed. If this is the case, you can
          request further information about the type and manner of processing. A detailed list can be found in Art. 15
          (1) a) to h) GDPR.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right to rectification according to Art. 16 GDPR</h4>
          This right includes the correction of inaccurate data and the completion of incomplete personal
          data.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right to deletion according to Art. 17 GDPR</h4>
          This so-called &apos;right to be forgotten&apos; gives you the right, under certain conditions, to demand the
          deletion of personal data by the controller. This is generally the case if the purpose of the data processing
          has ceased to exist, if consent has been revoked or if the initial processing took place without a legal
          basis. You can find a detailed list of reasons in Art. 17 (1) lit. a to f GDPR. Furthermore, this &apos;right
          to be
          forgotten&apos; corresponds with the obligation of the controller under Art. 17 (2) GDPR to take appropriate
          measures to bring about a general erasure of the data.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right to restriction of processing according to Art. 18 GDPR</h4>
          This right is subject to the conditions set out in Art. 18(1)(a) to (d).<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right to data portability according to Art. 20 GDPR</h4>
          Here, the basic right to receive one&apos;s own data in a common form and to transfer it to another data
          controller is regulated. However, this only applies to data processed on the basis of consent or a contract
          pursuant to Art. 20 (1) (a) and (b) and to the extent that this is technically feasible.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right of objection according to Art. 21 GDPR</h4>
          In principle, you can object to the processing of your personal data. This applies in particular if your
          interest in objecting outweighs the legitimate interest of the controller in the processing and if the
          processing relates to direct marketing and/or profiling.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right to &apos;decision in individual cases&apos; according to Art.
            22 GDPR</h4>
          In principle, you have the right not to be subject to a decision based solely on automated processing
          (including profiling) which produces legal effects vis-à-vis you or similarly significantly affects you.
          However, this right is also subject to restrictions and additions in Art. 22 (2) and (4) GDPR.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Right of appeal according to Art. 77 GDPR</h4>
          You also have the right to lodge a complaint with a data protection supervisory authority if you consider that
          the processing of personal data relating to you infringes this Regulation.<br/><br/>

          <h4 className='text-2xl font-medium mb-4'>Other rights</h4>
          The GDPR contains comprehensive rights to inform third parties about whether or how you have asserted rights
          under Art. 16, 17, 18 GDPR. However, this only applies insofar as this is possible or feasible with reasonable
          effort. At this point, we would like to inform you once again of your right to withdraw your consent in
          accordance with Article 7 (3) of the GDPR. However, this does not affect the lawfulness of the processing
          carried out up to that point. In addition, we would like to inform you about your rights according to §§ 32
          ff. BDSG, which, however, are largely congruent with the rights just described.<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Final words</h3>
          The current status of this Privacy Policy is 01.01.2025. From time to time it is necessary to adapt the
          content of the Privacy Policy in order to react to actual and legal changes. We therefore reserve the right to
          amend this Privacy Policy at any time. We will publish the amended version in the same place and recommend
          that you read the Privacy Policy regularly.
        </p>
      </section>
    </main>
  )
}