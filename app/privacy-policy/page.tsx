import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy',
  robots: {
    index: false
  }
};

export default function Page() {
  const encodedEmail = ['hi', 'tristantrommer.com'];

  return (
    <main className="flex flex-col items-center px-4">
      <section
        className="mt-24 mb-24 w-full max-w-180 scroll-mt-28 leading-8 sm:mb-40"
        id="privacy-policy"
      >
        <h1 className="mb-8 text-center text-4xl font-medium">
          Privacy Policy
        </h1>

        <p className="mb-4">
          We are delighted that you are interested in our organization. The
          protection of your personal data is particularly important to us. You
          can use our websites without disclosing any personal data to us.
          However, if you wish to use more specific services via our websites,
          other online platforms, applications, and social media pages, we may
          need to process your personal data. If we wish to process data about
          you and cannot rely on any other legal basis, we will always ask for
          your consent first (e.g., via a cookie banner).
        </p>
        <p className="mb-4">
          We always comply with applicable data protection laws when handling
          your personal data (such as your name, address, email, or phone
          number). This Privacy Policy informs you about what data we process.
          It also explains the rights you have as a data subject.
        </p>
        <p className="mb-4">
          We have implemented various technical and organizational measures to
          protect your data on our websites as effectively as possible.
          Nevertheless, there are always risks on the internet, and complete
          protection is not possible. Therefore, you may also provide us with
          your personal data through other channels, such as by phone, if you
          prefer.
        </p>
        <p className="mb-8">
          This Privacy Policy serves not only to fulfill the obligations under
          the GDPR and to comply with the laws of the member states of the
          European Union (EU) and the European Economic Area (EEA). This Privacy
          Policy is also intended to ensure compliance with legal regulations
          such as those of the United Kingdom (UK-GDPR), the Swiss Federal Act
          on Data Protection and the Swiss Data Protection Ordinance (DSG, DSV),
          the California Consumer Privacy Act (CCPA/CPRA), China&apos;s Personal
          Information Protection Law (PIPL), the Delaware Personal Data Privacy
          Act (DPDPA), the Tennessee Information Protection Act (TIPA), the
          Minnesota Consumer Data Privacy Act (MCDPA), the Iowa Act Relating to
          Consumer Data Protection (ICDPA), the Maryland Online Data Privacy Act
          (MODPA), the Nebraska Data Privacy Act (NDPA), New Hampshire Consumer
          Data Privacy Law (SB255), New Jersey Data Privacy Law (SB332), South
          Carolina Consumer Privacy Bill (House Bill 4696), and other global
          data protection regulations, and shall be interpreted accordingly. The
          following Privacy Policy shall be interpreted for each country, state,
          or province such that the terms and legal bases used correspond to the
          terms and legal bases used in the respective state or province.
        </p>

        {/* Section 1 */}
        <h2 className="mb-4 text-3xl font-medium">1. Definitions</h2>
        <p className="mb-4">
          In our Privacy Policy, we use specific terms from various data
          protection laws. We want our policy to be easy to understand, so we
          explain these terms in advance.
        </p>
        <p className="mb-4">
          The following definitions are based, where applicable, on the case law
          of the General Court of the European Union (GCEU), the Court of
          Justice of the European Union (CJEU), the Swiss Federal Supreme Court
          (BGE), the Supreme Court of the United Kingdom (UKSC), or based on
          national data protection laws or national case law of a country or
          state, including but not limited to California, including judicial
          precedent, including under common law, if this is necessary for the
          application of the law in individual cases.
        </p>
        <p className="mb-4">
          In this Privacy Policy, we use the following terms, among others:
        </p>

        <h3 className="mb-2 text-2xl font-medium">a) Personal Data</h3>
        <p className="mb-4">
          Personal data is any information relating to an identified or
          identifiable natural person (hereinafter, where applicable, the
          &quot;data subject&quot;). A natural person is considered identifiable
          if they can be identified, directly or indirectly, in particular by
          reference to an identifier such as a name, an identification number,
          location data, an online identifier, or one or more specific
          characteristics that reflect the physical, physiological, genetic,
          mental, economic, cultural, or social identity of that natural person,
          or who must be regarded as such under national data protection laws or
          the national case law of a state or federal state, including judicial
          precedent, even under common law.
        </p>

        <h3 className="mb-2 text-2xl font-medium">b) Data Subject</h3>
        <p className="mb-4">
          A data subject is any identified or identifiable natural person whose
          personal data is processed by the controller, a processor, an
          international organization, or another data recipient, and persons who
          must be regarded as such under national data protection laws or the
          national case law of a state or federal state, including judicial
          precedent, even under common law.
        </p>

        <h3 className="mb-2 text-2xl font-medium">c) Processing</h3>
        <p className="mb-4">
          Processing means any operation or set of operations performed on
          personal data, whether or not by automated means, such as collection,
          recording, organization, structuring, storage, adaptation or
          alteration, retrieval, consultation, use, disclosure by transmission,
          dissemination, or any other form of making available, alignment or
          combination, restriction, erasure, or destruction.
        </p>

        <h3 className="mb-2 text-2xl font-medium">
          d) Restriction of processing
        </h3>
        <p className="mb-4">
          Restriction of processing means the marking of stored personal data
          with the aim of limiting their future processing.
        </p>

        <h3 className="mb-2 text-2xl font-medium">e) Profiling</h3>
        <p className="mb-4">
          Profiling is any form of automated processing of personal data
          consisting of the use of personal data to evaluate certain personal
          aspects relating to a natural person, in particular to analyze or
          predict aspects concerning that natural person&apos;s work
          performance, economic situation, health, personal preferences,
          interests, reliability, behavior, location, or movements.
        </p>

        <h3 className="mb-2 text-2xl font-medium">f) Pseudonymization</h3>
        <p className="mb-4">
          Pseudonymization is the processing of personal data in such a manner
          that the personal data can no longer be attributed to a specific data
          subject without the use of additional information, provided that such
          additional information is kept separately and is subject to technical
          and organizational measures that ensure the personal data is not
          attributed to an identified or identifiable natural person.
        </p>

        <h3 className="mb-2 text-2xl font-medium">g) Controller</h3>
        <p className="mb-4">
          The controller is the natural or legal person, public authority,
          agency, or other body that, alone or jointly with others, determines
          the purposes and means of the processing of personal data. Where the
          purposes and means of processing are determined by Union or Member
          State law, the controller or the specific criteria for its designation
          may be provided for by Union or Member State law.
        </p>

        <h3 className="mb-2 text-2xl font-medium">h) Processor</h3>
        <p className="mb-4">
          A processor is a natural or legal person, public authority, agency, or
          other body that processes personal data on behalf of the controller.
        </p>

        <h3 className="mb-2 text-2xl font-medium">i) Recipient</h3>
        <p className="mb-4">
          A recipient is a natural or legal person, public authority, agency, or
          other body to whom personal data is disclosed, regardless of whether
          or not that body is a third party. However, public authorities that
          may receive personal data in the course of a specific investigative
          mandate under Union law or the law of the Member States are not
          considered recipients.
        </p>

        <h3 className="mb-2 text-2xl font-medium">j) Third party</h3>
        <p className="mb-4">
          A third party is a natural or legal person, public authority, agency,
          or other body other than the data subject, the controller, the
          processor, and the persons who, under the direct authority of the
          controller or the processor, are authorized to process the personal
          data.
        </p>

        <h3 className="mb-2 text-2xl font-medium">k) Consent</h3>
        <p className="mb-8">
          Consent means any freely given, specific, informed, and unambiguous
          indication of the data subject&apos;s wishes by which he or she, by a
          statement or by a clear affirmative action, signifies agreement to the
          processing of personal data relating to him or her.
        </p>

        {/* Section 2 */}
        <h2 className="mb-4 text-3xl font-medium">
          2. Name and Address of the Data Controller
        </h2>
        <p className="mb-4">
          The controller within the meaning of the General Data Protection
          Regulation, other data protection laws applicable in the Member States
          of the European Union and in the European Economic Area, UK data
          protection laws, Swiss data protection laws (DSG, DSV), California
          data protection laws (CCPA/CPRA), Chinese data protection law (PIPL),
          as well as international laws and other provisions of a data
          protection nature is:
        </p>
        <address className="mb-4 not-italic">
          Tristan Trommer
          <br />
          Emsdettener Str. 10
          <br />
          c/o POSTFLEX PFX-722-080
          <br />
          48268 Greven
          <br />
          Germany
        </address>
        <p className="mb-2">
          <strong>Represented by:</strong> Tristan Trommer
        </p>
        <p className="mb-8">
          <strong>Email:</strong>{' '}
          <Link href={`mailto:${encodedEmail[0]}@${encodedEmail[1]}`}>
            {`${encodedEmail[0]}@${encodedEmail[1]}`}
          </Link>
        </p>

        {/* Section 3 */}
        <h2 className="mb-4 text-3xl font-medium">
          3. Collection of General Data and Information
        </h2>
        <p className="mb-4">
          Our websites collect a range of general data and information each time
          a data subject or an automated system accesses the websites. This
          general data and information is stored in the log files of the
          respective server. The data collected may include, among other things,
          (1) the browser types and versions used, (2) the operating system used
          by the accessing system, (3) the website from which an accessing
          system reaches our websites (so-called referrer), (4) the subpages
          accessed via an accessing system on our websites, (5) the date and
          time of access to the website, (6) an Internet Protocol address (IP
          address), (7) the Internet service provider of the accessing system,
          and (8) other similar data and information that serve to prevent
          threats in the event of attacks on our information technology systems.
        </p>
        <p className="mb-4">
          We do not draw any conclusions about the data subject when using this
          general data and information. Rather, this information is required to
          (1) deliver the content of our websites correctly, (2) optimize the
          content of our websites as well as the advertising on them, (3) ensure
          the continued functionality of our information technology systems and
          the technology of our websites, and (4) provide law enforcement
          authorities with the information necessary for criminal prosecution in
          the event of a cyberattack. We therefore evaluate this anonymously
          collected data and information both statistically and with the aim of
          enhancing data protection and data security within our company,
          ultimately to ensure an optimal level of protection for the personal
          data we process. The data from the server log files is stored
          separately from any personal data provided by a data subject.
        </p>
        <p className="mb-8">
          The purpose of the processing is to prevent threats and ensure IT
          security, as well as the aforementioned purposes. The legal basis is
          Art. 6 (1) (f) GDPR. Our legitimate interest is, in particular, the
          protection of our information technology systems. The log files are
          deleted once the specified purposes have been achieved.
        </p>

        {/* Section 4 */}
        <h2 className="mb-4 text-3xl font-medium">
          4. Contact Options via the Website and Other Data Transmissions and
          Your Consent
        </h2>
        <p className="mb-4">
          Our websites contain information that enables quick electronic contact
          with our company as well as direct communication with us, which also
          includes a general electronic mail address (email address) and, if
          applicable, a telephone number. If a data subject contacts us via
          email, a contact form, an input form, or otherwise, the personal data
          transmitted by the data subject is automatically stored. Such personal
          data voluntarily transmitted to us by a data subject is processed for
          the purposes of processing the request or contacting the data subject.
        </p>
        <p className="mb-4">
          For the transmission, storage, and processing of your contact
          information and inquiries, as well as for contacting you, we obtain
          your consent pursuant to Art. 6 (1) (a) GDPR and Art. 49 (1) (1) (a)
          GDPR as follows:
        </p>
        <p className="mb-8 font-semibold">
          By submitting your personal data, you voluntarily consent to the
          processing of the personal data you have entered or submitted for the
          purpose of handling your inquiry and for us to contact you. By
          submitting your data to us, you also voluntarily grant your explicit
          consent pursuant to Art. 49 (1) (1)(a) of the GDPR for data transfers
          to third countries to and by the companies and for the purposes
          specified in this Privacy Policy, in particular for such transfers to
          third countries for which an EU/EEA adequacy decision exists or does
          not exist, as well as to companies or other entities that are not
          subject to an existing adequacy decision based on self-certification
          or other accession criteria, and in which or for which there are
          significant risks and no suitable safeguards for the protection of
          your personal data (e.g., due to Section 702 of the FISA, Executive
          Order EO 12333, and the Cloud Act in the United States). When you
          provided your voluntary and explicit consent, you were aware that
          third countries may not provide an adequate level of data protection
          and that your data subject rights may not be enforceable. You may
          revoke your consent under data protection law at any time with future
          effect. The revocation of consent does not affect the lawfulness of
          processing carried out on the basis of the consent prior to the
          revocation. With a single action (the entry and submission), you grant
          multiple consents. These include consents under EU/EEA data protection
          law as well as those under the CCPA/CPRA, ePrivacy, and telemedia law,
          and other international legal provisions that are required, among
          other things, as a legal basis for any planned further processing of
          your personal data. By performing this action, you also confirm that
          you have read and acknowledged this Privacy Policy.
        </p>

        {/* Section 5 */}
        <h2 className="mb-4 text-3xl font-medium">
          5. Routine Deletion and Restriction of Personal Data
        </h2>
        <p className="mb-4">
          We process and store personal data for the period necessary to achieve
          the purpose of the processing, or to the extent provided for by the
          European legislator or another legislator in laws or regulations to
          which we are subject, or for as long as a legal basis for the
          processing exists.
        </p>
        <p className="mb-8">
          If the purpose of the processing ceases to apply, or if a retention
          period prescribed by the European legislator or another competent
          legislator expires, or if the legal basis for the processing ceases to
          apply, the personal data will be routinely restricted or deleted in
          accordance with legal requirements.
        </p>

        {/* Section 6 */}
        <h2 className="mb-4 text-3xl font-medium">
          6. Rights of the data subject under the GDPR
        </h2>

        <h3 className="mb-2 text-2xl font-medium">a) Right to Confirmation</h3>
        <p className="mb-4">
          Every data subject has the right to request confirmation from the
          controller as to whether personal data concerning them is being
          processed. If a data subject wishes to exercise this right, they may
          contact us at any time.
        </p>

        <h3 className="mb-2 text-2xl font-medium">b) Right of access</h3>
        <p className="mb-4">
          Every data subject has the right to obtain from the controller, free
          of charge, information regarding the personal data stored about them
          and a copy of such data at any time. Furthermore, the European
          legislator has granted the data subject the right to obtain the
          following information:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>the purposes of processing,</li>
          <li>the categories of personal data being processed,</li>
          <li>
            the recipients or categories of recipients to whom the personal data
            have been or will be disclosed, in particular recipients in third
            countries or international organizations,
          </li>
          <li>
            if possible, the planned duration for which the personal data will
            be stored, or, if this is not possible, the criteria for determining
            this duration,
          </li>
          <li>
            the existence of a right to rectification or erasure of personal
            data concerning them, or to restriction of processing by the
            controller, or a right to object to such processing,
          </li>
          <li>
            the existence of a right to lodge a complaint with a supervisory
            authority,
          </li>
          <li>
            if the personal data are not collected from the data subject: any
            available information regarding the source of the data,
          </li>
          <li>
            the existence of automated decision-making, including profiling,
            pursuant to Article 22(1) and (4) of the GDPR and—at least in such
            cases—meaningful information regarding the logic involved, as well
            as the significance and the intended consequences of such processing
            for the data subject.
          </li>
        </ul>
        <p className="mb-4">
          Furthermore, the data subject has the right to be informed whether
          personal data has been transferred to a third country or to an
          international organization. If this is the case, the data subject is
          also entitled to receive information about the appropriate safeguards
          in connection with the transfer.
        </p>
        <p className="mb-4">
          If a data subject wishes to exercise this right, they may contact us
          at any time.
        </p>

        <h3 className="mb-2 text-2xl font-medium">c) Right to Rectification</h3>
        <p className="mb-4">
          Every data subject has the right to request the immediate
          rectification of inaccurate personal data concerning them.
          Furthermore, the data subject has the right to request the completion
          of incomplete personal data—including by means of a supplementary
          statement—taking into account the purposes of the processing. If a
          data subject wishes to exercise this right, they may contact us at any
          time.
        </p>

        <h3 className="mb-2 text-2xl font-medium">
          d) Right to erasure (right to be forgotten)
        </h3>
        <p className="mb-4">
          Every data subject has the right to request from the controller that
          personal data concerning them be erased without delay, provided that
          one of the following grounds applies and insofar as the processing is
          not necessary:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            The personal data was collected or otherwise processed for purposes
            for which it is no longer necessary.
          </li>
          <li>
            The data subject withdraws their consent on which the processing was
            based pursuant to Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR, and there
            is no other legal basis for the processing.
          </li>
          <li>
            The data subject objects to the processing pursuant to Article 21(1)
            of the GDPR, and there are no overriding legitimate grounds for the
            processing, or the data subject objects to the processing pursuant
            to Article 21(2) of the GDPR.
          </li>
          <li>The personal data has been processed unlawfully.</li>
          <li>
            The erasure of the personal data is necessary for compliance with a
            legal obligation under Union law or the law of the Member States to
            which the controller is subject.
          </li>
          <li>
            The personal data was collected in relation to information society
            services offered pursuant to Article 8(1) of the GDPR.
          </li>
        </ul>
        <p className="mb-4">
          If any of the above grounds apply and a data subject wishes to request
          the erasure of personal data stored by us, they may contact us at any
          time.
        </p>
        <p className="mb-4">
          If the personal data has been made public by us and our organization,
          as the controller, is obligated to erase the personal data pursuant to
          Article 17(1) of the GDPR, we will take appropriate measures,
          including technical measures, taking into account available technology
          and implementation costs, to inform other controllers processing the
          published personal data that the data subject has requested from those
          other controllers the deletion of all links to such personal data or
          of copies or replicas of such personal data, insofar as the processing
          is not necessary.
        </p>

        <h3 className="mb-2 text-2xl font-medium">
          e) Right to restriction of processing
        </h3>
        <p className="mb-4">
          Every data subject has the right to request that the controller
          restrict processing if one of the following conditions is met:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li>
            The accuracy of the personal data is contested by the data subject,
            for a period enabling the controller to verify the accuracy of the
            personal data.
          </li>
          <li>
            The processing is unlawful, the data subject opposes the erasure of
            the personal data and requests, instead, the restriction of the use
            of the personal data.
          </li>
          <li>
            The controller no longer needs the personal data for the purposes of
            processing, but the data subject needs it to establish, exercise, or
            defend legal claims.
          </li>
          <li>
            The data subject has objected to the processing pursuant to Art.
            21(1) of the GDPR, and it has not yet been determined whether the
            legitimate grounds of the controller override those of the data
            subject.
          </li>
        </ul>
        <p className="mb-4">
          If any of the above conditions are met and a data subject wishes to
          request the restriction of personal data stored by us, they may
          contact us at any time.
        </p>

        <h3 className="mb-2 text-2xl font-medium">
          f) Right to data portability
        </h3>
        <p className="mb-4">
          Every data subject has the right to receive the personal data
          concerning them, which the data subject has provided to a controller,
          in a structured, commonly used, and machine-readable format. They also
          have the right to transmit this data to another controller without
          hindrance from the controller to whom the personal data was provided,
          provided that the processing is based on consent pursuant to Art. 6
          (1) (a) GDPR or Art. 9(2)(a) of the GDPR or on a contract pursuant to
          Article 6(1)(b) of the GDPR, and the processing is carried out by
          automated means, provided that the processing is not necessary for the
          performance of a task carried out in the public interest or in the
          exercise of official authority vested in the controller.
        </p>
        <p className="mb-4">
          Furthermore, when exercising their right to data portability pursuant
          to Art. 20(1) GDPR, the data subject has the right to have the
          personal data transmitted directly from one controller to another
          controller, provided this is technically feasible and does not
          infringe upon the rights and freedoms of others.
        </p>
        <p className="mb-4">
          If a data subject wishes to exercise this right, they may contact us
          at any time.
        </p>

        <h3 className="mb-2 text-2xl font-medium">g) Right to object</h3>
        <p className="mb-4">
          Every data subject has the right to object at any time, on grounds
          relating to their particular situation, to the processing of personal
          data concerning them that is carried out pursuant to Article 6(1)(e)
          or (f) of the GDPR. This also applies to profiling based on these
          provisions.
        </p>
        <p className="mb-4">
          In the event of an objection, we will no longer process the personal
          data unless we can demonstrate compelling legitimate grounds for the
          processing that override the interests, rights, and freedoms of the
          data subject, or the processing is necessary for the establishment,
          exercise, or defense of legal claims.
        </p>
        <p className="mb-4">
          If we process personal data for the purpose of direct marketing, the
          data subject has the right to object at any time to the processing of
          personal data for the purpose of such marketing. This also applies to
          profiling to the extent that it is related to such direct marketing.
          If the data subject objects to us regarding processing for direct
          marketing purposes, we will no longer process the personal data for
          these purposes.
        </p>
        <p className="mb-4">
          In addition, the data subject has the right to object, on grounds
          relating to their particular situation, to the processing of personal
          data concerning them that is carried out by us for scientific or
          historical research purposes or for statistical purposes pursuant to
          Article 89(1) of the GDPR, unless such processing is necessary for the
          performance of a task carried out in the public interest.
        </p>
        <p className="mb-4">
          If a data subject wishes to exercise this right, they may contact us
          at any time. The data subject is also free, in connection with the use
          of information society services, notwithstanding Directive 2002/58/EC,
          to exercise their right to object by means of automated procedures
          using technical specifications.
        </p>

        <h3 className="mb-2 text-2xl font-medium">
          h) Automated individual decision-making, including profiling
        </h3>
        <p className="mb-4">
          Every data subject has the right not to be subject to a decision based
          solely on automated processing—including profiling—that produces legal
          effects concerning him or her or similarly significantly affects him
          or her, unless the decision (1) is necessary for entering into or
          performing a contract between the data subject and the controller, or
          (2) is authorized by Union or Member State law to which the controller
          is subject and which also lays down suitable measures to safeguard the
          data subject&apos;s rights and freedoms and legitimate interests; or
          (3) is based on the data subject&apos;s explicit consent.
        </p>
        <p className="mb-4">
          If the decision (1) is necessary for the conclusion or performance of
          a contract between the data subject and the controller, or (2) is made
          with the explicit consent of the data subject, we will take
          appropriate measures to safeguard the rights and freedoms as well as
          the legitimate interests of the data subject, including at least the
          right to request the controller to involve a person, to present their
          own point of view, and to challenge the decision.
        </p>
        <p className="mb-4">
          If a data subject wishes to exercise this right, they may contact us
          at any time.
        </p>

        <h3 className="mb-2 text-2xl font-medium">
          i) Right to withdraw consent under data protection law
        </h3>
        <p className="mb-8">
          Every data subject has the right to withdraw consent to the processing
          of personal data at any time. If a data subject wishes to exercise
          this right, they may contact us at any time.
        </p>

        {/* Section 7 */}
        <h2 className="mb-4 text-3xl font-medium">
          7. General Purpose of Processing, Categories of Processed Data, and
          Categories of Recipients
        </h2>
        <p className="mb-4">
          The general purpose of processing personal data is to handle all
          matters concerning the controller, customers, prospects, business
          partners, or other contractual or pre-contractual relationships
          between the aforementioned groups (in the broadest sense) or the
          controller&apos;s legal obligations. This general purpose applies
          unless more specific purposes are stated for a particular processing
          activity.
        </p>
        <p className="mb-8">
          The categories of personal data we process are customer data, prospect
          data, employee data (including applicant data), and supplier data. The
          categories of recipients of personal data are public authorities,
          external entities, internal processing, intra-group processing, and
          other entities. A list of our processors and data recipients in third
          countries, as well as international organizations where applicable, is
          either published on our website or can be requested from us free of
          charge.
        </p>

        {/* Section 8 */}
        <h2 className="mb-4 text-3xl font-medium">
          8. Legal Bases for Processing
        </h2>
        <p className="mb-4">
          Art. 6 (1) (a) of the GDPR serves as the legal basis for processing
          operations in which we obtain consent for a specific processing
          purpose. If the processing of personal data is necessary for the
          performance of a contract to which the data subject is a party—as is
          the case, for example, with processing operations required for the
          delivery of goods or the provision of other services or
          consideration—the processing is based on Art. 6 (1) (b) of the GDPR.
          The same applies to processing operations necessary for the
          implementation of pre-contractual measures, such as in cases of
          inquiries regarding our products or services. If we are subject to a
          legal obligation that requires the processing of personal data, such
          as to fulfill tax obligations, the processing is based on Article
          6(1)(c) of the GDPR.
        </p>
        <p className="mb-4">
          In rare cases, the processing of personal data may be necessary to
          protect the vital interests of the data subject or another natural
          person. This would be the case, for example, if a visitor were injured
          on our premises and their name, age, health insurance information, or
          other vital information had to be disclosed to a doctor, a hospital,
          or other third parties. In such cases, the processing would be based
          on Article 6(1)(d) of the GDPR.
        </p>
        <p className="mb-4">
          If the processing is necessary for the performance of a task carried
          out in the public interest or in the exercise of official authority
          vested in the controller, the legal basis is Article 6(1)(e) of the
          GDPR.
        </p>
        <p className="mb-8">
          Finally, processing operations could be based on Article 6(1)(f) of
          the GDPR. Processing operations not covered by any of the
          aforementioned legal bases are based on this legal basis if the
          processing is necessary to safeguard a legitimate interest of our
          company or a third party, provided that the interests, fundamental
          rights, and fundamental freedoms of the data subject do not override
          those interests. We are permitted to carry out such processing
          operations in particular because they were specifically mentioned by
          the European legislator. In this regard, the legislator took the view
          that a legitimate interest could be assumed, for example, if the data
          subject is a customer of the controller (Recital 47, Sentence 2 of the
          GDPR).
        </p>

        {/* Section 9 */}
        <h2 className="mb-4 text-3xl font-medium">
          9. Legitimate Interests in Processing Pursued by the Controller or a
          Third Party and Direct Marketing
        </h2>
        <p className="mb-4">
          If the processing of personal data is based on Article 6(1)(f) of the
          GDPR, and no more specific legitimate interests are specified, our
          legitimate interest is the conduct of our business activities for the
          benefit of our staff and shareholders.
        </p>
        <p className="mb-4">
          We may send you direct marketing regarding our own goods or services
          that are similar to the goods or services you have inquired about,
          ordered, or purchased. You may object to direct marketing at any time
          (e.g., by email). This will not incur any costs for you other than the
          transmission costs according to standard rates. The processing of
          personal data for direct marketing purposes is based on Article
          6(1)(f) of the GDPR. The legitimate interest is direct marketing.
        </p>
        <p className="mb-8">
          Our messages and newsletters may also constitute communications for
          direct marketing purposes within the meaning of Article 13(2) of EU
          Directive 2002/58 (Directive on Privacy and Electronic Communications)
          and the national law resulting from the Directive, provided that we
          have received your electronic and other contact information in
          connection with the sale of a service or product, which includes the
          creation of a free user account that allows you, among other things,
          to access free content on our websites and publications (newsletters,
          etc.), provided that we use direct marketing to promote similar
          products or services, so that direct marketing is also permissible
          without consent (see ECJ, judgment of Nov. 13, 2025, Case C-654/23).
          In such cases, you may object to the use of your contact information
          at any time free of charge.
        </p>

        {/* Section 10 */}
        <h2 className="mb-4 text-3xl font-medium">
          10. Duration for which personal data is stored
        </h2>
        <p className="mb-8">
          The criterion for the duration of storage of personal data is the
          respective statutory retention period. If no statutory retention
          period exists, the criterion is the contractual or internal retention
          period. After the period expires, the relevant data is routinely
          deleted unless it is still required for the performance of the
          contract or for entering into a contract. This applies in particular
          to all processing operations for which no more specific criteria have
          been established.
        </p>

        {/* Section 11 */}
        <h2 className="mb-4 text-3xl font-medium">
          11. Legal or contractual requirements for the provision of personal
          data; necessity for the conclusion of the contract; obligation of the
          data subject to provide personal data; possible consequences of
          non-provision
        </h2>
        <p className="mb-8">
          We inform you that the provision of personal data is in part required
          by law (e.g., tax regulations) or may also result from contractual
          provisions (e.g., information regarding the contractual partner). In
          some cases, it may be necessary for a data subject to provide us with
          personal data in order to conclude a contract, which we must
          subsequently process. For example, the data subject is obligated to
          provide us with personal data when our organization enters into a
          contract with them. Failure to provide the personal data would result
          in the contract with the data subject not being able to be concluded.
          Before providing personal data, the data subject must contact us. We
          inform the data subject on a case-by-case basis as to whether the
          provision of personal data is required by law or contract or is
          necessary for the conclusion of the contract, whether there is an
          obligation to provide the personal data, and what consequences the
          failure to provide the personal data would have.
        </p>

        {/* Section 12 */}
        <h2 className="mb-4 text-3xl font-medium">
          12. Existence of Automated Decision-Making
        </h2>
        <p className="mb-4">
          As a responsible company, we generally refrain from automated
          decision-making or profiling. If, in exceptional cases, we carry out
          automated decision-making or profiling, we will inform the data
          subject either separately or via a sub-section in our Privacy Policy
          (here on our website). In this case, the following applies:
        </p>
        <p className="mb-4">
          Automated decision-making, including profiling, may occur if this (1)
          is necessary for the conclusion or performance of a contract between
          the data subject and us, or (2) is permitted under Union or Member
          State law to which we are subject, and such law includes appropriate
          measures to safeguard the rights and freedoms as well as the
          legitimate interests of the data subject, or (3) this is done with the
          data subject&apos;s explicit consent.
        </p>
        <p className="mb-4">
          In the cases referred to in Article 22(2)(a) and (c) of the GDPR, we
          will take appropriate measures to safeguard the rights and freedoms as
          well as the legitimate interests of the data subject. In these cases,
          you have the right to request intervention by a person on the part of
          the controller, to present your own point of view, and to challenge
          the decision.
        </p>
        <p className="mb-8">
          Meaningful information regarding the logic involved, as well as the
          scope and intended effects of such processing on the data subject,
          will be provided in this Privacy Policy where applicable.
        </p>

        {/* Section 13 */}
        <h2 className="mb-4 text-3xl font-medium">
          13. Recipients in a third country and appropriate or suitable
          safeguards, and how to obtain a copy of them or where they are
          available.
        </h2>
        <p className="mb-4">
          Pursuant to Art. 46 (1) GDPR, the controller or a processor may
          transfer personal data to a third country only if the controller or
          processor has provided appropriate safeguards and provided that
          enforceable rights and effective legal remedies are available to the
          data subjects. Appropriate safeguards may be provided by standard data
          protection clauses without the need for specific authorization from a
          supervisory authority, Art. 46(2)(c) GDPR.
        </p>
        <p className="mb-4">
          Prior to the first transfer of personal data, the EU Standard Data
          Protection Clauses or other appropriate safeguards are agreed upon
          with all recipients in third countries, or the transfers are based on
          adequacy decisions. Consequently, it is ensured that appropriate
          safeguards, enforceable rights, and effective legal remedies are
          guaranteed for all processing of personal data. Any data subject may
          obtain a copy of the Standard Data Protection Clauses or adequacy
          decisions from us. In addition, the Standard Data Protection Clauses
          and adequacy decisions are available in the Official Journal of the
          European Union.
        </p>
        <p className="mb-4">
          Article 45(3) of the GDPR empowers the European Commission to decide,
          by means of an implementing act, that a non-EU country ensures an
          adequate level of protection. This means a level of protection for
          personal data that is essentially equivalent to the level of
          protection within the EU. Adequacy decisions mean that personal data
          can flow from the EU (as well as from Norway, Liechtenstein, and
          Iceland) to a third country without further obstacles. Similar
          provisions apply to the United Kingdom, Switzerland, and some other
          countries.
        </p>
        <p className="mb-8">
          In all cases where the European Commission, or a government or
          competent authority of another country, has determined that a third
          country ensures an adequate level of protection and/or a valid
          framework exists (e.g., EU-U.S. Data Privacy Framework, Swiss-U.S.
          Data Privacy Framework, UK Extension to the EU-U.S. Data Privacy
          Framework), all transfers by us to members of such frameworks (e.g.,
          self-certified entities) are based exclusively on that entity&apos;s
          membership in the respective framework or on the respective adequacy
          decisions. If we or one of our group companies is a member of such a
          framework, all transfers to us or our group company are based
          exclusively on the respective company&apos;s membership in that
          framework. If we or one of our group companies is located in a third
          country with an adequate level of protection, all transfers to us or
          our group company are based exclusively on the respective adequacy
          decisions. Any data subject may obtain a copy of the frameworks from
          us. In addition, the frameworks are also available in the Official
          Journal of the European Union, in published legislative materials, or
          on the websites of data protection supervisory authorities or other
          authorities or institutions.
        </p>

        {/* Section 14 */}
        <h2 className="mb-4 text-3xl font-medium">
          14. Right to lodge a complaint with a data protection supervisory
          authority
        </h2>
        <p className="mb-8">
          As the controller, we are obligated to inform the data subject of
          their right to lodge a complaint with a supervisory authority. This
          right to lodge a complaint is governed by Article 77(1) of the GDPR.
          Under this provision, every data subject has the right to lodge a
          complaint with a supervisory authority, in particular in the Member
          State of their residence, their workplace, or the place of the alleged
          infringement, without prejudice to any other administrative or
          judicial remedy, if the data subject considers that the processing of
          personal data concerning them infringes the General Data Protection
          Regulation. The right to lodge a complaint has been restricted by the
          EU legislator solely to the extent that it may be exercised only with
          a single supervisory authority (Recital 141, Sentence 1 of the GDPR).
          This provision is intended to prevent duplicate complaints regarding
          the same matter by the same data subject. If a data subject wishes to
          file a complaint against us, we therefore ask that only a single
          supervisory authority be contacted.
        </p>

        {/* Section 15 */}
        <h2 className="mb-4 text-3xl font-medium">
          15. Registration or Filling Out Forms on Our Website and Your Consent
        </h2>
        <p className="mb-4">
          You have the option to register on our websites by providing personal
          data and/or to fill out input forms. The specific personal data
          transmitted to us in this process is determined by the respective
          input form used for registration or data entry. The personal data you
          enter is processed exclusively for our internal use and for our own
          purposes. However, we may transfer your personal data to one or more
          processors, such as parcel delivery services, who will also use your
          personal data exclusively for purposes attributable to us as the
          controller. A transfer may also occur if you have instructed us to do
          so; the legal basis in this case is Article 6(1)(b) of the GDPR.
        </p>
        <p className="mb-4">
          When you register or enter data on our website, the IP address
          assigned by your Internet service provider (ISP), as well as the date
          and time of the registration or data entry, may also be stored. This
          data is stored because it is the only way to prevent misuse of our
          services, and this data enables us to investigate criminal offenses if
          necessary. In this respect, the storage of this data is necessary for
          our protection. The purpose of this processing is to prevent threats,
          detect misuse, and investigate criminal offenses, as well as the
          aforementioned purposes. The legal basis is Article 6(1)(f) of the
          GDPR. Our legitimate interest is, in particular, the protection of our
          information technology systems and the investigation of criminal
          offenses. This data is generally not disclosed to third parties,
          unless there is a legal obligation to do so or the disclosure serves
          the purposes of criminal prosecution.
        </p>
        <p className="mb-4">
          The registration, entry, and transmission of your personal data also
          serve to enable us to offer you content or services that, by their
          very nature, can only be offered to registered users or individuals
          known to us. You are free to modify the personal data provided during
          registration at any time or have it completely deleted from our
          database. The purposes of processing are the receipt of data by us and
          the use of your data for further processing, for communication with
          you, and for the fulfillment or implementation of the registration or
          input purposes. The legal basis is your consent pursuant to Art. 6 (1)
          (a) GDPR and/or Art. 49 (1) (1) (a) GDPR.
        </p>
        <p className="mb-4 font-semibold">
          By entering and submitting your data, you voluntarily consent to the
          processing of the personal data you have entered. By entering your
          data and submitting it to us, you also voluntarily grant explicit
          consent pursuant to Art. 49 (1) (1)(a) of the GDPR for data transfers
          to third countries to and by the companies and for the purposes
          specified in this Privacy Policy, in particular for such transfers to
          third countries for which an EU/EEA adequacy decision exists or does
          not exist, as well as to companies or other entities that are not
          subject to an existing adequacy decision based on self-certification
          or other accession criteria, and in which or for which there are
          significant risks and no suitable safeguards for the protection of
          your personal data (e.g., due to Section 702 of the FISA, Executive
          Order EO 12333, and the Cloud Act in the United States). When you
          provided your voluntary and explicit consent, you were aware that
          third countries may not provide an adequate level of data protection
          and that your data subject rights may not be enforceable. You may
          revoke your consent under data protection law at any time with future
          effect. The revocation of consent does not affect the lawfulness of
          processing carried out on the basis of the consent prior to the
          revocation. With a single action (the entry and submission), you grant
          multiple consents. These include consents under EU/EEA data protection
          law as well as those under the CCPA/CPRA, ePrivacy, and telemedia law,
          and other international legal provisions that are required, among
          other things, as a legal basis for any planned further processing of
          your personal data. By performing this action, you also confirm that
          you have read and acknowledged this Privacy Policy.
        </p>
        <p className="mb-8">
          We will provide any data subject, upon request, with information at
          any time regarding which personal data has been stored about them.
          Furthermore, we will correct or delete personal data at the request or
          upon notification by the data subject, provided that no legal
          retention obligations or other reasons justifying processing preclude
          this. We are happy to serve as your point of contact in this regard.
        </p>

        {/* Section 16 */}
        <h2 className="mb-4 text-3xl font-medium">
          16. Privacy Policy Regarding the Use of Cloudflare Zaraz Consent
          Management
        </h2>
        <p className="mb-4">
          Cloudflare Zaraz is a tool integrated into the Cloudflare
          infrastructure for managing third-party scripts and for obtaining and
          managing user consent (Consent Management). It enables the data
          protection-compliant control of cookies and tracking technologies on
          our website without the need for a separate plugin or an external
          consent management service. Cloudflare Zaraz automatically detects and
          controls which third-party services may be activated and ensures that
          cookies and tracking are loaded only after explicit consent has been
          granted.
        </p>
        <p className="mb-4">
          When using Cloudflare Zaraz Consent Management, personal data may be
          processed, in particular users&apos; consent decisions
          (opt-in/opt-out), technical identifiers (e.g., cookies for storing the
          consent decision), IP addresses, and timestamps of the granting or
          revocation of consent.
        </p>
        <p className="mb-4">
          The operator of the service and thus the recipient of the personal
          data is: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
          94107, USA. For data subjects in the EU and the EEA, Cloudflare
          Netherlands B.V., Keizersgracht 62, 1015CS Amsterdam, Netherlands,
          acts as the contact person and representative within the meaning of
          Art. 27 GDPR. The representative under UK national law is: Cloudflare,
          Ltd., County Hall/The Riverside Building, Belvedere Road, London, SE1
          7PB, United Kingdom.
        </p>
        <p className="mb-4">
          Purposes for which the personal data is to be processed, as well as
          the legal basis for the processing: The purpose of using Cloudflare
          Zaraz Consent Management is to ensure compliance with data protection
          laws such as the GDPR by managing consent for cookies and tracking
          technologies, as well as documenting granted and revoked consents. The
          processing is based on Article 6(1)(c) of the GDPR, as the processing
          is necessary for compliance with a legal obligation to which our
          organization is subject.
        </p>
        <p className="mb-4">
          The service provider is located in a third country, namely the United
          States. Transfers to third countries may be based on the conclusion of
          standard contractual clauses or on other suitable or appropriate
          safeguards referred to in Article 46(2) of the GDPR. The service
          provider may be a certified member of one or more data privacy
          frameworks. Further details can be found at{' '}
          <Link
            href="https://www.dataprivacyframework.gov/list"
            target="_blank"
          >
            https://www.dataprivacyframework.gov/list
          </Link>
          . You may request a copy of the appropriate or adequate safeguards
          from us.
        </p>
        <p className="mb-4">
          The criteria for determining the duration for which personal data is
          processed are the statutory or contractual retention periods. The use
          of personal data is required by law, as it is necessary to fulfill
          legal obligations regarding data protection and consent management.
          Users are required to specify their cookie preferences or reject
          cookies, and this information must be stored to properly document the
          decision.
        </p>
        <p className="mb-8">
          Further information and Cloudflare Zaraz&apos;s applicable privacy
          policy can be found at{' '}
          <Link href="https://www.cloudflare.com/" target="_blank">
            https://www.cloudflare.com/
          </Link>
          .
        </p>

        {/* Section 17 */}
        <h2 className="mb-4 text-3xl font-medium">
          17. Privacy Policy Regarding the Use of Cloudflare
        </h2>
        <p className="mb-4">
          Cloudflare is our exclusive hosting and infrastructure provider. Our
          website and all associated applications run entirely on the Cloudflare
          platform. In particular, we use Cloudflare Workers (serverless
          execution environment for our applications), Cloudflare D1 (serverless
          relational database), Cloudflare R2 (object storage), Cloudflare
          Queues (message queues for asynchronous processing), Cloudflare Email
          Workers (serverless email sending for transactional emails),
          Cloudflare DNS (Domain Name System), Cloudflare CDN (Content Delivery
          Network for fast content delivery), DDoS protection, and a Web
          Application Firewall (WAF). By operating entirely on Cloudflare, we
          can ensure high availability, security, and performance of our
          services worldwide.
        </p>
        <p className="mb-4">
          When using Cloudflare services, data such as IP addresses, system
          configurations, network traffic information, application and database
          data, as well as recipient email addresses, subject lines, email
          content, and delivery-related metadata are processed. This information
          is necessary to operate our applications, defend against threats,
          optimize traffic, and ensure the functionality of our services.
        </p>
        <p className="mb-4">
          We use Cloudflare Email Workers exclusively for sending transactional
          emails, such as contact form confirmations and system notifications.
          No marketing emails are sent via this service. When sending emails,
          personal data such as recipient addresses, subject lines, email
          content, and delivery-related metadata (e.g., delivery status, bounce
          information) may be processed.
        </p>
        <p className="mb-4">
          The operator of the service and thus the recipient of the personal
          data is: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
          94107, USA. For data subjects in the EU and the EEA, Cloudflare
          Netherlands B.V., Keizersgracht 62, 1015CS Amsterdam, Netherlands,
          acts as the contact person and representative within the meaning of
          Art. 27 GDPR. The representative under UK national law is: Cloudflare,
          Ltd., County Hall/The Riverside Building, Belvedere Road, London, SE1
          7PB, United Kingdom.
        </p>
        <p className="mb-4">
          Purposes for which personal data is to be processed, as well as the
          legal basis for processing: The purpose of processing is the use of
          services to secure and optimize websites and web applications, as well
          as the sending of transactional emails in connection with the
          performance of a contract or pre-contractual measures. Processing is
          based on Article 6(1)(f) of the GDPR, whereby the legitimate interest
          lies in ensuring the security, performance, and reliability of our
          online presence, as well as on Article 6(1)(b) of the GDPR insofar as
          emails are sent to fulfill a contract with the data subject.
        </p>
        <p className="mb-4">
          The service provider is located in a third country, namely the United
          States. Transfers to third countries may be based on the conclusion of
          standard contractual clauses or on other suitable or appropriate
          safeguards referred to in Article 46(2) of the GDPR. The service
          provider may be a certified member of one or more data privacy
          frameworks. Further details can be found at{' '}
          <Link
            href="https://www.dataprivacyframework.gov/list"
            target="_blank"
          >
            https://www.dataprivacyframework.gov/list
          </Link>
          . You may request a copy of the appropriate or adequate safeguards
          from us.
        </p>
        <p className="mb-4">
          The criteria for determining the duration for which personal data is
          processed are the contractual relationship between us and the service
          provider or statutory or contractual retention periods. The provision
          of personal data is neither required by law or contract nor necessary
          for the conclusion of a contract. You are not obligated to provide
          personal data to us or to the service provider. However, if you do not
          provide such data, you may not be able to use our services or those of
          the service provider.
        </p>
        <p className="mb-8">
          Further information and the applicable privacy policy of Cloudflare,
          Inc. can be found at{' '}
          <Link href="https://www.cloudflare.com" target="_blank">
            https://www.cloudflare.com
          </Link>
          .
        </p>

        {/* Section 18 */}
        <h2 className="mb-4 text-3xl font-medium">
          18. Privacy Policy Regarding the Use of Cloudflare Email Protection
        </h2>
        <p className="mb-4">
          We use Cloudflare Email Protection to secure our email traffic against
          threats such as phishing, spoofing, malware, and targeted attacks. The
          service is part of the Cloudflare Zero Trust Platform and protects
          incoming and outgoing emails by applying advanced filtering
          mechanisms, behavioral analysis, and real-time checks. In this
          context, personal data may be processed, particularly if it is
          contained in email content, attachments, or associated metadata. Among
          other things, the following data is processed: sender data and
          recipient addresses, subject lines, header information, email content,
          IP addresses, location data, file attachments, timestamps, as well as
          security-related connection data and event data.
        </p>
        <p className="mb-4">
          Cloudflare automatically analyzes the transmitted emails via data
          centers distributed worldwide. In doing so, the service detects and
          blocks suspicious messages, flags potential threats, and stores
          security-related information for further analysis. Additionally,
          connection data is logged to detect anomalies, prevent abuse, and
          improve the effectiveness of protective measures. The Cloudflare Email
          Protection solution is also used to meet compliance requirements and
          to document security-related email transactions.
        </p>
        <p className="mb-4">
          The operator of the service and thus the recipient of the personal
          data is: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
          94107, USA. For data subjects in the EU and the EEA, Cloudflare
          Netherlands B.V., Keizersgracht 62, 1015CS Amsterdam, Netherlands,
          acts as the contact person and representative within the meaning of
          Art. 27 GDPR. The representative under UK national law is: Cloudflare,
          Ltd., County Hall/The Riverside Building, Belvedere Road, London, SE1
          7PB, United Kingdom.
        </p>
        <p className="mb-4">
          Purposes for which the personal data will be processed, as well as the
          legal basis for the processing: The purpose of the processing is to
          protect email communications from attacks and tampering, to analyze
          and filter potentially harmful content, to ensure a stable and secure
          email infrastructure, and to comply with internal company security
          policies. The processing is based on Article 6(1)(f) of the GDPR. The
          legitimate interest lies in protection against cyber threats, the
          integrity of our communication systems, and the security of our
          employees and business partners.
        </p>
        <p className="mb-4">
          The service provider is located in a third country, namely the United
          States. Transfers to third countries may be based on the conclusion of
          standard contractual clauses or on other suitable or appropriate
          safeguards referred to in Article 46(2) of the GDPR. The service
          provider may be a certified member of one or more data privacy
          frameworks. Further details can be found at{' '}
          <Link
            href="https://www.dataprivacyframework.gov/list"
            target="_blank"
          >
            https://www.dataprivacyframework.gov/list
          </Link>
          . You may request a copy of the appropriate or adequate safeguards
          from us.
        </p>
        <p className="mb-4">
          The criteria for determining the duration for which personal data is
          processed are the contractual relationship between us and the service
          provider or statutory or contractual retention periods. The provision
          of personal data is not required by law or contract, nor is it
          necessary for the conclusion of a contract. You are not obligated to
          provide personal data to us or to the service provider. However, if
          you do not provide such data, you may not be able to use our services
          or those of the service provider.
        </p>
        <p className="mb-8">
          Further information and Cloudflare&apos;s applicable privacy policy
          can be found at{' '}
          <Link href="https://www.cloudflare.com/" target="_blank">
            https://www.cloudflare.com/
          </Link>
          .
        </p>

        {/* Section 19 */}
        <h2 className="mb-4 text-3xl font-medium">
          19. Privacy Policy Regarding the Use of Cloudflare Web Analytics
        </h2>
        <p className="mb-4">
          Cloudflare Web Analytics is a powerful analytics tool that provides us
          with detailed insights into the behavior of our website visitors. The
          solution enables us to measure key metrics such as visitor numbers,
          page views, device types, and traffic sources. By using Cloudflare Web
          Analytics, we can analyze our website&apos;s performance, improve user
          experiences, and make data-driven decisions to optimize our online
          presence.
        </p>
        <p className="mb-4">
          When using Cloudflare Web Analytics, data such as IP addresses, usage
          data, and information about user behavior is processed. This
          information helps us monitor the performance and accessibility of our
          website.
        </p>
        <p className="mb-4">
          The operator of the service and thus the recipient of the personal
          data is: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
          94107, USA. For data subjects in the EU and the EEA, Cloudflare
          Netherlands B.V., Keizersgracht 62, 1015CS Amsterdam, Netherlands,
          acts as the contact person and representative within the meaning of
          Art. 27 GDPR. The representative under UK national law is: Cloudflare,
          Ltd., County Hall/The Riverside Building, Belvedere Road, London, SE1
          7PB, United Kingdom.
        </p>
        <p className="mb-4">
          Purposes for which personal data is to be processed, as well as the
          legal basis for processing: The purpose of processing is to analyze
          and improve the performance of our website. Processing is based on
          Article 6(1)(f) of the GDPR, whereby the legitimate interest lies in
          optimizing our website and providing a better user experience.
        </p>
        <p className="mb-4">
          The service provider is located in a third country, namely the United
          States. Transfers to third countries may be based on the conclusion of
          standard contractual clauses or on other suitable or appropriate
          safeguards referred to in Article 46(2) of the GDPR. The service
          provider may be a certified member of one or more data privacy
          frameworks. Further details can be found at{' '}
          <Link
            href="https://www.dataprivacyframework.gov/list"
            target="_blank"
          >
            https://www.dataprivacyframework.gov/list
          </Link>
          . You may request a copy of the appropriate or adequate safeguards
          from us.
        </p>
        <p className="mb-4">
          The criteria for determining the duration for which personal data is
          processed are the contractual relationship between us and the service
          provider or statutory or contractual retention periods. The provision
          of personal data is neither required by law or contract nor necessary
          for the conclusion of a contract. You are not obligated to provide
          personal data to us or to the service provider. However, if you do not
          provide such data, you may not be able to use our services or those of
          the service provider.
        </p>
        <p className="mb-8">
          Further information and the applicable privacy policy for Cloudflare
          Web Analytics can be found at{' '}
          <Link href="https://www.cloudflare.com" target="_blank">
            https://www.cloudflare.com
          </Link>
          .
        </p>

        {/* Section 20 */}
        <h2 className="mb-4 text-3xl font-medium">
          20. Privacy Policy Regarding the Use of Cloudflare Turnstile
        </h2>
        <p className="mb-4">
          Cloudflare Turnstile is a privacy-friendly CAPTCHA service from
          Cloudflare that is used on our website to distinguish between human
          users and automated bots and to protect our forms and services from
          abuse, spam, and automated attacks. Unlike traditional CAPTCHA
          solutions, Cloudflare Turnstile does not display image puzzles;
          instead, it relies on client-side challenge procedures that run in the
          background and are generally invisible to users.
        </p>
        <p className="mb-4">
          When using Cloudflare Turnstile, personal data may be processed, in
          particular IP addresses, browser information (user agent, language
          settings), interaction data (e.g., mouse movements, click and timing
          data), cookies and similar technologies, as well as information about
          the device and operating system used.
        </p>
        <p className="mb-4">
          The operator of the service and thus the recipient of the personal
          data is: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA
          94107, USA. For data subjects in the EU and the EEA, Cloudflare
          Netherlands B.V., Keizersgracht 62, 1015CS Amsterdam, Netherlands,
          acts as the contact person and representative within the meaning of
          Art. 27 GDPR. The representative under UK national law is: Cloudflare,
          Ltd., County Hall/The Riverside Building, Belvedere Road, London, SE1
          7PB, United Kingdom.
        </p>
        <p className="mb-4">
          Purposes for which the personal data is to be processed, as well as
          the legal basis for the processing: The purpose of the processing is
          to protect our website and services from abuse by automated systems,
          spam, and malicious activities, as well as to ensure the integrity of
          form submissions. The processing is based on Article 6(1)(f) of the
          GDPR, where the legitimate interest lies in defending against bot
          attacks, protecting our IT infrastructure, and ensuring the security
          of our users.
        </p>
        <p className="mb-4">
          The service provider is located in a third country, namely the United
          States. Transfers to third countries may be based on the conclusion of
          standard contractual clauses or on other suitable or appropriate
          safeguards referred to in Article 46(2) of the GDPR. The service
          provider may be a certified member of one or more data privacy
          frameworks. Further details can be found at{' '}
          <Link
            href="https://www.dataprivacyframework.gov/list"
            target="_blank"
          >
            https://www.dataprivacyframework.gov/list
          </Link>
          . You may request a copy of the appropriate or adequate safeguards
          from us.
        </p>
        <p className="mb-4">
          The criteria for determining the duration for which personal data is
          processed are the contractual relationship between us and the service
          provider or statutory or contractual retention periods. The provision
          of personal data is neither required by law or contract nor necessary
          for the conclusion of a contract. You are not obligated to provide
          personal data to us or to the service provider. However, if you do not
          provide such data, certain features of our website—in particular
          forms—may not be available.
        </p>
        <p className="mb-8">
          Further information and the applicable privacy policy of Cloudflare
          Turnstile can be found at{' '}
          <Link
            href="https://www.cloudflare.com/products/turnstile/"
            target="_blank"
          >
            https://www.cloudflare.com/products/turnstile/
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
