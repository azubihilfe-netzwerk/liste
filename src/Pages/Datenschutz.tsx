import React, { FC } from "react";

const Datenschutz: FC = () => {
  return (
    <div className="container mx-auto pt-[7vw] md:pt-[11vw] px-4">
      <h2 className="text-2xl font-bold mb-4">
        Verarbeitung personenbezogener Daten im Rahmen des Betriebs dieser Seite
      </h2>
      <p className="mb-4">
        Personenbezogene Daten der Nutzer dieser Internetseite werden
        verarbeitet, soweit dies zum Zweck des Betriebs einer funktionsfähigen
        Internetseite erforderlich ist. Hierfür werden automatisiert folgende
        Daten von dem diese Seite aufrufenden Rechner erhoben:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          die IP-Adresse des Rechners, mit dem diese Internetseite aufgerufen
          wird;
        </li>
        <li>der Typ der eingesetzten Browser-Software;</li>
        <li>die zuvor aufgerufene Internetseite;</li>
        <li>die Konfiguration des diese Seite aufrufenden Rechners;</li>
        <li>Datum und Uhrzeit.</li>
      </ul>
      <p className="mb-4">
        Die IP-Adresse wird nur solange gespeichert, wie dies zur Erbringung
        ordnungsgemäßer Dienste erforderlich ist, insbesondere zur Erkennung und
        Abwehr einer nicht ordnungsgemäßen Nutzung. Spätestens nach sieben Tagen
        wird die IP-Adresse des diese Seite aufrufenden Rechners anonymisiert.
      </p>
      <p className="mb-8">
        Rechtsgrundlage dieser Verarbeitung personenbezogener Daten ist Art. 6
        Abs. 1 Satz 1 lit. f) der Verordnung (EU) 2016/679
        (Datenschutzgrundverordnung – DSGVO). Das berechtigte Interesse an der
        Datenverarbeitung liegt im ordnungsgemäßen Betrieb dieser Internetseite.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Kategorien von Empfängern personenbezogener Daten
      </h2>
      <p className="mb-8">
        Die im Rahmen der unter 2. beschriebenen Vorgänge erhobenen Daten werden
        bei einem Auftragsdatenverarbeiter im Inland verarbeitet. Dieser
        erbringt Dienste zum technischen Betrieb und zur Wartung dieser
        Internetseite.
      </p>

      <h2 className="text-2xl font-bold mb-4">Rechte der Betroffenen</h2>

      <h3 className="text-xl font-semibold mb-2">a) Auskunftsrecht</h3>
      <p className="mb-4">
        Der Betroffene hat das Recht, von dem Verantwortlichen eine Bestätigung
        darüber zu verlangen, ob ihn betreffende personenbezogene Daten
        verarbeitet werden; ist dies der Fall, so hat er ein Recht auf Auskunft
        über diese personenbezogenen Daten und auf folgende Informationen:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>die Verarbeitungszwecke;</li>
        <li>die Kategorien personenbezogener Daten, die verarbeitet werden;</li>
        <li>
          die Empfänger oder Kategorien von Empfängern, gegenüber denen die
          personenbezogenen Daten offengelegt worden sind oder noch offengelegt
          werden, insbesondere bei Empfängern in Drittländern oder bei
          internationalen Organisationen;
        </li>
        <li>
          falls möglich die geplante Dauer, für die die personenbezogenen Daten
          gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien
          für die Festlegung dieser Dauer;
        </li>
        <li>
          das Bestehen eines Rechts auf Berichtigung oder Löschung der ihn
          betreffenden personenbezogenen Daten oder auf Einschränkung der
          Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts
          gegen diese Verarbeitung;
        </li>
        <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;</li>
        <li>
          wenn die personenbezogenen Daten nicht bei dem Betroffenen erhoben
          werden, alle verfügbaren Informationen über die Herkunft der Daten;
        </li>
      </ul>
      <p className="mb-8">
        Der Verantwortliche stellt eine Kopie der personenbezogenen Daten, die
        Gegenstand der Verarbeitung sind, zur Verfügung.
      </p>

      <h3 className="text-xl font-semibold mb-2">b) Recht auf Berichtigung</h3>
      <p className="mb-8">
        Der Betroffene hat das Recht, von dem Verantwortlichen unverzüglich die
        Berichtigung ihn betreffender unrichtiger personenbezogener Daten zu
        verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung hat der
        Betroffene das Recht, die Vervollständigung unvollständiger
        personenbezogener Daten — auch mittels einer ergänzenden Erklärung — zu
        verlangen.
      </p>

      <h3 className="text-xl font-semibold mb-2">c) Recht auf Löschung</h3>
      <p className="mb-4">
        Der Betroffene hat das Recht, von dem Verantwortlichen zu verlangen, daß
        ihn betreffende personenbezogene Daten unverzüglich gelöscht werden, und
        der Verantwortliche ist verpflichtet, personenbezogene Daten
        unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben
          oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
        </li>
        <li>
          Der Betroffene widerruft seine Einwilligung, auf die sich die
          Verarbeitung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9
          Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer
          anderweitigen Rechtsgrundlage für die Verarbeitung.
        </li>
        <li>
          Der Betroffene legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen
          die Verarbeitung ein und es liegen keine vorrangigen berechtigten
          Gründe für die Verarbeitung vor, oder der Betroffene legt gemäß
          Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein.
        </li>
        <li>Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.</li>
        <li>
          Die Löschung der personenbezogenen Daten ist zur Erfüllung einer
          rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der
          Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
        </li>
        <li>
          Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der
          Informationsgesellschaft gemäß Artikel 8 Absatz 1 DSGVO erhoben.
        </li>
      </ul>
      <p className="mb-4">
        Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht
        und ist er gemäß dem vorstehenden Absatz zu deren Löschung verpflichtet,
        so trifft er unter Berücksichtigung der verfügbaren Technologie und der
        Implementierungskosten angemessene Maßnahmen, auch technischer Art, um
        für die Datenverarbeitung Verantwortliche, die die personenbezogenen
        Daten verarbeiten, darüber zu informieren, daß ein Betroffener Person
        von ihnen die Löschung aller Links zu diesen personenbezogenen Daten
        oder von Kopien oder Replikationen dieser personenbezogenen Daten
        verlangt hat.
      </p>
      <p className="mb-8">
        Die vorstehenden Absätze gelten nicht, soweit die Verarbeitung
        erforderlich ist zur Ausübung des Rechts auf freie Meinungsäußerung und
        Information; zur Erfüllung einer rechtlichen Verpflichtung, die die
        Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der
        Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer
        Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung
        öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde;
        aus Gründen des öffentlichen Interesses im Bereich der öffentlichen
        Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben h und i sowie Artikel 9
        Absatz 3 DSGVO; zur Geltendmachung, Ausübung oder Verteidigung von
        Rechtsansprüchen.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        d) Recht auf Einschränkung der Verarbeitung
      </h3>
      <p className="mb-4">
        Der Betroffene hat das Recht, von dem Verantwortlichen die Einschränkung
        der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen
        gegeben ist:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          die Richtigkeit der personenbezogenen Daten von dem Betroffenen
          bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen
          ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,
        </li>
        <li>
          die Verarbeitung unrechtmäßig ist und der Betroffene die Löschung der
          personenbezogenen Daten ablehnt und stattdessen die Einschränkung der
          Nutzung der personenbezogenen Daten verlangt;
        </li>
        <li>
          der Verantwortliche die personenbezogenen Daten für die Zwecke der
          Verarbeitung nicht länger benötigt, der Betroffene sie jedoch zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          benötigt, oder
        </li>
        <li>
          der Betroffene Widerspruch gegen die Verarbeitung gemäß Artikel 21
          Absatz 1 DSGVO eingelegt hat, solange noch nicht feststeht, ob die
          berechtigten Gründe des Verantwortlichen gegenüber denen des
          Betroffenen überwiegen.
        </li>
      </ul>
      <p className="mb-8">
        Wurde die Verarbeitung hiernach eingeschränkt, so dürfen diese
        personenbezogenen Daten — von ihrer Speicherung abgesehen — nur mit
        Einwilligung des Betroffenen oder zur Geltendmachung, Ausübung oder
        Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer
        anderen natürlichen oder juristischen Person oder aus Gründen eines
        wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats
        verarbeitet werden. Ein Betroffener, der eine Einschränkung der
        Verarbeitung hiernach erwirkt hat, wird von dem Verantwortlichen
        unterrichtet, bevor die Einschränkung aufgehoben wird.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        e) Widerspruchsrecht gegen die Verarbeitung
      </h3>
      <p className="mb-8">
        Der Betroffene hat das Recht, aus Gründen, die sich aus seiner
        besonderen Situation ergeben, jederzeit gegen die Verarbeitung ihn
        betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz
        1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen; Der
        Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es
        sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung
        nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen
        Person überwiegen, oder die Verarbeitung dient der Geltendmachung,
        Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        f) Recht auf Datenübertragbarkeit
      </h3>
      <p className="mb-4">
        Der Betroffene hat das Recht, die ihn betreffenden personenbezogenen
        Daten, die er einem Verantwortlichen bereitgestellt hat, in einem
        strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und
        er hat das Recht, diese Daten einem anderen Verantwortlichen ohne
        Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten
        bereitgestellt wurden, zu übermitteln, sofern:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1
          Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO oder auf einem
          Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und
        </li>
        <li>die Verarbeitung mit Hilfe automatisierter Verfahren erfolgt.</li>
      </ul>
      <p className="mb-8">
        Bei der Ausübung seines Rechts auf Datenübertragbarkeit hat der
        Betroffene das Recht, zu erwirken, daß die personenbezogenen Daten
        direkt von einem Verantwortlichen einem anderen Verantwortlichen
        übermittelt werden, soweit dies technisch machbar ist. Die Ausübung des
        Rechts läßt Artikel 17 DSGVO unberührt. Dieses Recht gilt nicht für eine
        Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist,
        die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt
        erfolgt, die dem Verantwortlichen übertragen wurde.
      </p>

      <h3 className="text-xl font-semibold mb-2">
        g) Recht auf Einschränkung der Verarbeitung
      </h3>
      <p className="mb-8">
        Der Betroffene hat das Recht zur Beschwerde bei einer zuständigen
        Aufsichtsbehörde.
      </p>

      <h2 className="text-2xl font-bold mb-4">Weitere Angaben</h2>
      <p className="mb-4">
        Die Bereitstellung der personenbezogenen Daten ist gesetzlich oder
        vertraglich nicht vorgeschrieben. Ein Vertragsschluß ist nicht
        erforderlich. Es besteht keine Pflicht, personenbezogene Daten
        bereitzustellen. Werden personenbezogene Daten nicht im unter 2.
        beschriebenen Rahmen zur Verfügung gestellt, ist eine Nutzung dieser
        Internetseite nicht möglich. Eine automatisierte Entscheidungsfindung
        und sogenanntes Profiling finden nicht statt.
      </p>

      <p>
        Quelle:{" "}
        <a
          href="http://www.muster-impressum.de"
          className="text-blue-500 hover:underline"
        >
          http://www.muster-impressum.de
        </a>
      </p>
    </div>
  );
};

export default Datenschutz;
