export const servicesCons = {
  EN: {
    AntiDumping: (antiD, setAntiD) => {
      return (
        <div
          id="antidumping"
          className="col-lg-12 col-md-6 box wow bounceInUp"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-analytics-outline"></i>
          </div>
          <h4 className="title">Anti-dumping</h4>
          <div className="description">
            <span className="span__description">
              UNI Professional Services provides:
            </span>
            <br />
            UNI's team experts offer the following categories: <br />
            <ul>
              <li>Assistance in responding to dumping investigation steps</li>
              <li>Anti-dumping complaint support</li>
              <li> Vietnam Importer remedy Assistance</li>
            </ul>
            {antiD && (
              <div>
                <span className="span__description">
                  Why is it important to prepare an anti-dumping exclusion
                  request?
                </span>
                <br />
                At present, as Vietnam promotes global economic exchanges, more
                and more goods are being imported into Vietnam. However, if
                there is a possibility that the domestic industry will be harmed
                by the increase in imports, trade remedies will be taken to
                limit the number of imported goods to Vietnam. Anti-dumping
                duties are one such trade remedy. However, at present, companies
                do not have much experience in responding to anti-dumping
                measures. If fail to respond to the dumping duty, a high rate of
                anti-dumping duty will be imposed, and there is a risk of losing
                the Vietnamese market. If the Vietnamese market is heavily
                weighted, even the company's existence may be at stake. This is
                the reason why responding to trade disputes has emerged as a
                major issue in corporate management global activities. <br />
                <span className="span__description ">
                  The reason Why you should Choose UNI as a Consultant?
                </span>
                <br />
                UNI supports countermeasures by forming a team of experienced
                consultants and analysts with long experience in Vietnam's trade
                and customs sector. UNI supports the rapid, accurate and
                professional response of anti-dumping investigation steps and
                exemption applications. For example, in the case of trade
                disputes, in the investigation stage, companies often request
                complex and massive data. In the case of anti-dumping
                investigations, the Ministry of Industry and Trade (MoIT) of
                Vietnam makes extensive requests for accurate cost data and
                proofs for overall company information, domestic sales and
                exports. It takes a lot of time and manpower to accurately
                submit these data. Inaccurate or inconsistent data will not be
                accepted. Therefore, an effective response to an investigation
                with the help of experts minimizes damage and rather gives a
                customs advantage over other companies, turning a crisis into an
                opportunity.
                <br />
                <span className="span__description">
                  How can UNI support its customers?
                </span>
                <br />
                Our goal is to provide consulting, support and customer
                representation services in the process to minimize anti-dumping
                duties on imports and exports. In addition, the consulting team
                supports successful responses based on accurate price research
                on imports and exports in Vietnam. <br />
              </div>
            )}
          </div>
          <div
            className="text-primary description123"
            onClick={() => setAntiD(!antiD)}
          >
            Show {antiD ? "Less" : "More"}
          </div>
        </div>
      );
    },
    CustomsDecitionComplaint: (custom, setCustom) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-bookmarks-outline"></i>
        </div>
        <h4 className="title">Customs decition Appeals Proceedings</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items: <br />
          <ul>
            <li>
              An objection to the decision on tax imposition of the General
              Department of Customs
            </li>
            <li>
              Procedures for complaining about tax decisions of the General
              Department of Customs
            </li>
            <li>Review decision on HS </li>
            <li>Other </li>
          </ul>
          {custom && (
            <div>
              <span className="span__description">
                Why is it important to appeal a Customs decision?
              </span>
              <br />
              Customs decisions have a huge impact on the operations, finances
              and operations of businesses related to import and export. But in
              reality, sometimes businesses see inadequate about some decisions
              of customs such as HS codes,... However, due to lack of experience
              and expertise in legal and regulatory matters. procedures, so
              businesses are still confused, leading to many difficulties,
              unreasonable and unsuccessful complaints. <br />
              <span className="span__description">
                Why should you choose UNI as your consulting agency?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we provide a
              team of experienced consultants and analysts, leading in the field
              of trade and customs. UNI legal consultants will connect with
              other related experts to support businesses to review customs
              decisions, carry out procedures and documents to appeal decisions
              reasonably and quickly. Best. UNI supports businesses with all
              issues related to all import and export goods. <br />
              <span className="span__description">
                How can UNI support customers?
              </span>
              <br />
              Our goal is to integrate the services of checking data, managing
              and consulting import and export activities for businesses. In
              addition, the consulting team can assist with the correct
              classification of items and certification of origin to receive
              tariff benefits, as well as advice throughout the trade process.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setCustom(!custom)}
        >
          Show {custom ? "Less" : "More"}
        </div>
      </div>
    ),
    FTA: (fta, setFta) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-paper-outline"></i>
        </div>
        <h4 className="title">FTA origin consulting </h4>
        <div className="description">
          <span className="span__description">
            UNI Consulting FTA Services:
          </span>
          <br />
          We provide consulting services specializing in FTAs ​​in the following
          fields:
          <ul>
            <li>EU/CPTPP/GSP/Korea/Japan/ASEAN/China </li>
            <li>Consulting Certificate of Origin C/O Issuance </li>
            <li>
              FTA company internal management system by specific product or
              industry
            </li>
            <li>Other FTA and Origin Consulting </li>
          </ul>
          {fta && (
            <div>
              <span className="span__description">
                Why is FTA origin consulting important?
              </span>
              <br />
              In line with the trend of global economic integration and trade
              liberalization, Vietnam has been an active participant in
              bilateral and multilateral FTA negotiations and signing. In order
              to enjoy benefit of FTAs, It must meet stringent standards of
              origin and prove origin. Therefore, it is necessary to establish
              an origin management internal procedure with the help of FTA
              experts.
              <br />
              <span className="span__description">Why UNI FTA Consulting?</span>
              <br />
              With in-depth knowledge and hands-on understanding, we provide a
              team of analysts with many years of experience in the field of
              trade and customs. UNI Consulting will actively support the
              preparation of necessary procedures and documents for increase the
              utilization of FTAs ​​by companies. UNI provide high-quality
              consulting by considering all issues related to import/export and
              customs clearance that may directly or indirectly affect the FTA
              origin.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setFta(!fta)}
        >
          Show {fta ? "Less" : "More"}
        </div>
      </div>
    ),
    Sale: (sale, setSale) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-speedometer-outline"></i>
        </div>
        <h4 className="title">Certificate of Incentives</h4>
        <div className="description">
          <span className="span__description">
            UNI specialist services provide:
          </span>
          <br />
          The team of experts at UNI offers the following categories:
          <ul>
            <li>SI Certificate(Support Industry Certificate) Review </li>
            <li>
              SI Certificate(Support Industry Certificate) Application Support
            </li>
            <li>
              SI Certificate(Support Industry Certificate) Management and
              Maintenance Support
            </li>
          </ul>
          {sale && (
            <div>
              <span className="span__description">
                Why do businesses need a Certificate of Incentives "Project for
                manufacturing supporting industry products"?
              </span>
              <br />
              Supporting industry according to the concept of Decree
              111/2015/ND-CP, is the industry that involves manufacturing
              materials, accessories, components, and spare parts used for
              assembling finished goods. According to the survey, Vietnam’s
              suppoting industry is growing and plays an important role in
              participating in the global supply chain.
              <br />
              Therefore, Vietnam is prioritizing the promotion of these
              industries through attractive preferential policies for businesses
              operating in this field. However, in order to enjoy these
              preferential regimes, it requires enterprises to understand the
              conditions, as well as the orders and procedures to be granted the
              Certificate of Incentives "Project for manufacturing supporting
              industry products".
              <br />
              <span className="span__description">
                The reason why you should choose UNI as a consultant
              </span>
              <br />
              With in-depth knowledge and practical understanding, we provide a
              team of experienced consultants and analysts, leading in the field
              of trade and customs. In particular, We have experiences in
              handling various certifications with the Vietnam Ministry of
              Industry Trade (MoIT). We are forming a deep tie with MoIT, which
              is department in charge SI certification (parts and materials
              industry certification). Uni legal consultants will actively
              support enterprises to carry out procedures and papers to be
              granted the Certificate of Preferential Treatment "supporting
              industrial product production projects". Support businesses all
              issues related to the suppoting industry quickly and accurately.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setSale(!sale)}
        >
          Show {sale ? "Less" : "More"}
        </div>
      </div>
    ),
    Logistics: (logistic, setLogistic) => (
      <div
        id="logistics"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-barcode-outline"></i>
        </div>
        <h4 className="title">Logistics</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <ul>
            <li>Import/export/local export clearance Agency</li>
            <li>Import price(Tariff assessment)</li>
            <li>Import and export consulting</li>
            <li>Consulting certificate of origin C/O </li>
            <li>Register for export license Certificate of origin (C/O)</li>
            <li>Import-export authorization</li>
            <li>Sea/air/express shipping </li>
            <li>Domestic transport </li>
            <li>Container and bulk cargo transportation </li>
            <li>Other </li>
          </ul>
          {logistic && (
            <div>
              <span className="span__description">
                Why is logistics service important?
              </span>
              <br />
              Logistics is an intermediary stage to bring goods (products or
              services) to consumers as quickly as possible. It will include
              inbound and outbound freight operations, fleet management,
              warehousing, raw materials, order fulfillment, inventory
              management, and supply and demand planning. In addition, Logistics
              services will also concurrently find input materials, production
              planning, product packaging, customer service... To specialize
              work and save time and costs. , then businesses use logistics
              services.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we are
              committed to connecting businesses with a team of experienced,
              leading consultants and analysts in the field of trade and
              customs. UNI experts will act on behalf of businesses to carry out
              customs clearance of goods, book ships, containers, and domestic
              transportation. Support businesses in consulting on how to import
              tax-free materials, logistics, take advantage of FTAs, import
              equipment and machinery, ... quickly, efficiently with the most
              optimal cost.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setLogistic(!logistic)}
        >
          Show {logistic ? "Less" : "More"}
        </div>
      </div>
    ),
    MarketReseach: (market, setMarket) => (
      <div
        id="marketreseach"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-people-outline"></i>
        </div>
        <h4 className="title">Market reseach</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          UNI can support businesses through the investment strategy making
          process as well as advise on a series of issues including:
          <ul>
            <li>Skills and know-how in Vietnam's import-export industry </li>
            <li>Analyze input and output information </li>
            <li>Find out the exact target audience </li>

            <li>
              Provide accurate information on import and export quantities and
              prices
            </li>
            <li>Partner connection </li>
            <li>Competitor information </li>
            <li>Other</li>
          </ul>
          {market && (
            <div>
              <span className="span__description">
                Why is market research consulting important?
              </span>
              <br />
              The key to success for any business is to understand what your
              customers want, outshine your competition, and gain an edge in the
              market. To find out and come up with the most optimal solutions,
              businesses need to carry out a process called "Market Research".
              However, without much experience and information, businesses will
              spend a lot of time and money on research, even inaccurate
              results, leading to wrong business decisions. Therefore,
              entrepreneurs will need to a professional agency to take care of
              it better.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, UNI is a
              consulting company, specializing in providing professional and
              prestigious services for import-export, manufacturing and
              foreign-invested enterprises in Vietnam. Through the actually
              working process, we provide and connect a team of experienced
              consultants who are always ready to listen and offer the best
              effective solutions for businesses.
              <br />
              <span className="span__description">
                How can UNI support customers?
              </span>
              <br />
              Our goal is to provide an integrated service of collecting data,
              analyzing and proposing solutions, helping businesses come up with
              an optimal strategy. In addition, the UNI team also specializes in
              parts, including:
              <br />
              <ul>
                <li>Import and export specialist, customs </li>
                <li>
                  Consulting group by field:
                  <ul>
                    <li>Legal advisory group </li>
                    <li>Accounting consulting group </li>
                    <li>International trade group </li>
                    <li>IT team handling big data </li>
                  </ul>
                </li>
              </ul>
              In particular, our team of market research specialists always pay
              attention to procedural, legal issues, opportunities and
              challenges arising from the market for each business objective.
              Therefore, UNI makes it easy for customers to grasp trends, manage
              potential risks, identify opportunities and gain competitive
              advantages, and devise effective strategies.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setMarket(!market)}
        >
          Show {market ? "Less" : "More"}
        </div>
      </div>
    ),
    Setup: (rebuild, setRebuild) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-home-outline"></i>
        </div>
        <h4 className="title">Factory setup/ Re-building/ M&A</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <br />
          Factory set-up: <br />
          <ul>
            <li>Import material tax refund consulting </li>
            <li>
              Cargo forwarding consulting
              <ul>
                <li>FTA usage consulting </li>
                <li>Accounting consulting group </li>
                <li>Machinery import consulting </li>
                <li>
                  Agency of customs new registration procedure M&A:
                  <ul>
                    <li>Simulated tariff audit</li>
                    <li>Customs risks assessment</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {rebuild && (
            <div>
              <span className="span__description">
                Why are factory setup and M&A consulting important?
              </span>
              <br />
              In order for the factory to be put into operation and business or
              to be acquired and merged, enterprises have to face a large amount
              of work such as market survey, site selection, legal paperwork
              preparation, planning. Therefore, in order to save time, costs,
              minimize risks and optimize efficiency from the very beginning,
              many businesses now choose factory setup services from
              professional units instead of professional companies. for doing it
              yourself.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we connect
              businesses with a team of experienced consultants and analysts,
              leading in the field of trade and customs. UNI experts support
              businesses with advice on how to import tax-free materials,
              logistics, take advantage of FTAs, import machinery and equipment,
              customs procedures... Help businesses save costs and limit Risks
              and advantages of setting up a factory or M&A.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setRebuild(!rebuild)}
        >
          Show {rebuild ? "Less" : "More"}
        </div>
      </div>
    ),
    Tariff: (tariff, setTariff) => (
      <div
        id="tariff"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-flower-outline"></i>
        </div>
        <h4 className="title">Tariff & Clearance</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <br />
          <ul>
            <li>Import/export/local export clearance Agency </li>
            <li>
              Import price(Tariff assessment)
              <li>HS Code dispute prevention </li>
              <li>Import tax refund code consulting </li>
              <li>Other </li>
            </li>
          </ul>
          {tariff && (
            <div>
              <span className="span__description">
                Why is the customs clearance service important?
              </span>
              <br />
              Currently, in the period of international integration, customs
              clearance procedures have been significantly reduced. However,
              because there are still many problems in the procedures as well as
              businesses do not know the expertise and experience, many
              businesses still face many problems with customs clearance of
              goods such as HS code, invalid C/O. Therefore, businesses need a
              professional consultant to support and do exactly that job on
              their behalf in order to save time, costs as well as minimize
              risks. risk for the business.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we are
              committed to connecting businesses with a team of experienced,
              leading consultants and analysts in the field of trade and
              customs. UNI experts will act on behalf of enterprises to carry
              out customs clearance of goods, support businesses with advice on
              how to import tax-free materials, logistics, take advantage of
              FTAs, import equipment and machinery,... quickly, efficiency with
              the most optimal cost.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setTariff(!tariff)}
        >
          Show {tariff ? "Less" : "More"}
        </div>
      </div>
    ),
    Tax: (tax, setTax) => (
      <div
        id="tax"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-book-outline"></i>
        </div>
        <h4 className="title">Tax refund material balance management</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <br />
          <ul>
            <li>
              Check import and export data of export processing enterprises
            </li>
            <li>Balance management for export processing enterprises</li>
            <li>Export processing Liquidation</li>
            <li>Consumption, stock management consulting</li>
            <li>Financial reports</li>
            <li>Tax refund consulting </li>
            <li>Others </li>
          </ul>
          {tax && (
            <div>
              <span className="span__description">
                Why is it important to check data after customs clearance?
              </span>
              <br />
              In recent years, the implementation of customs procedures has been
              reformed and shortened greatly by state agencies to facilitate
              businesses. Therefore, customs also tightened the post-clearance
              inspection of goods more in order to check the truthfulness,
              reasonableness and reliability of the information declared by the
              goods owner. However, if you do not have a lot of experience and
              expertise, it will take a lot of time and a lot of costs for
              businesses such as paying administrative fines, paying additional
              taxes for the amount of imported materials used. improper
              purposes…
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we provide a
              team of experienced consultants and analysts, leading in the field
              of trade and customs. UNI consulting experts in balance field will
              support businesses to perform (settle) general tasks related to
              customs tax and check data after customs clearance in the fastest,
              most accurate and professional way. UNI support businesses with
              all issues related to all import and export goods.
              <br />
              <span className="span__description">
                How can UNI support customers?
              </span>
              <br />
              Our goal is to provide data checking, management and consulting
              services for post-clearance activities to help businesses. In
              addition, the consulting team can assist with the correct
              classification of items and certification of origin to receive
              tariff benefits, as well as advice throughout the trade process.
              Various media, dispatches, tax decisions and regulations need to
              be closely monitored, researched and promptly responded to when
              new information and content becomes available… <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setTax(!tax)}
        >
          Show {tax ? "Less" : "More"}
        </div>
      </div>
    ),
  },
  VI: {
    AntiDumping: (antiD, setAntiD) => {
      return (
        <div
          id="antidumping"
          className="col-lg-12 col-md-6 box wow bounceInUp"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-analytics-outline"></i>
          </div>
          <h4 className="title">Hồ sơ miễn trừ biện pháp chống bán phá giá</h4>
          <div className="description">
            <span className="span__description">
              Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
            </span>
            <br />
            Nhóm chuyên gia của UNI đưa ra các hạng mục sau:
            <ul>
              <li>Hỗ trợ trong việc đáp ứng các bước điều tra bán phá giá</li>
              <li>Hỗ trợ khiếu nại chống bán phá giá</li>
              <li>Hỗ trợ khắc phục hậu quả cho nhà nhập khẩu Việt Nam</li>
            </ul>
            {antiD && (
              <div>
                <span className="span__description">
                  Tại sao việc chuẩn bị hồ sơ miễn trừ áp dụng biện pháp chống
                  bán phá giá lại quan trọng?
                </span>
                <br />
                Hiện nay, khi Việt Nam đẩy mạnh giao lưu kinh tế toàn cầu, ngày
                càng nhiều hàng hóa được nhập khẩu vào Việt Nam. Tuy nhiên, nếu
                có khả năng ngành sản xuất trong nước bị tổn hại do nhập khẩu
                tăng, các biện pháp phòng vệ thương mại sẽ được áp dụng để hạn
                chế số lượng hàng hóa nhập khẩu vào Việt Nam. Thuế chống bán phá
                giá là một trong những biện pháp phòng vệ thương mại. Tuy nhiên,
                hiện nay các công ty chưa có nhiều kinh nghiệm trong việc ứng
                phó với các biện pháp chống bán phá giá. Nếu không đáp ứng được
                mức thuế bán phá giá, mức thuế chống bán phá giá cao sẽ bị áp
                dụng và có nguy cơ mất thị trường Việt Nam. Nếu thị trường Việt
                Nam bị đặt nặng, ngay cả sự tồn tại của công ty cũng có thể bị
                đe dọa. Đây là lý do tại sao ứng phó với các tranh chấp thương
                mại đã nổi lên như một vấn đề chính trong các hoạt động toàn cầu
                của quản lý doanh nghiệp.
                <br />
                <span className="span__description">
                  Tại sao nên chọn UNI làm đơn vị tư vấn
                </span>
                <br />
                UNI hỗ trợ các biện pháp đối phó bằng cách hình thành một đội
                ngũ chuyên gia tư vấn và phân tích có kinh nghiệm lâu năm trong
                lĩnh vực thương mại và hải quan của Việt Nam. UNI hỗ trợ phản
                ứng nhanh chóng, chính xác và chuyên nghiệp đối với các bước
                điều tra chống bán phá giá và các đơn xin miễn trừ. Ví dụ, trong
                trường hợp tranh chấp thương mại, trong giai đoạn điều tra, các
                công ty thường yêu cầu dữ liệu phức tạp và lớn. Trong trường hợp
                bị điều tra chống bán phá giá, Bộ Công Thương Việt Nam đưa ra
                yêu cầu rộng rãi về dữ liệu chi phí chính xác và các bằng chứng
                về thông tin tổng thể của công ty, doanh số bán hàng trong nước
                và xuất khẩu. Phải mất rất nhiều thời gian và nhân lực để gửi
                chính xác những dữ liệu này. Dữ liệu không chính xác hoặc không
                nhất quán sẽ không được chấp nhận. Do đó, một phản ứng hiệu quả
                đối với một cuộc điều tra với sự trợ giúp của các chuyên gia sẽ
                giảm thiểu thiệt hại và thay vào đó mang lại lợi thế hải quan so
                với các công ty khác, biến khủng hoảng thành cơ hội.
                <br />
                <span className="span__description">
                  UNI có thể hỗ trợ khách hàng như thế nào?
                </span>
                <br />
                Mục tiêu của chúng tôi là cung cấp dịch vụ tư vấn, hỗ trợ và đại
                diện cho khách hàng trong quá trình giảm thiểu thuế chống bán
                phá giá đối với hàng hóa xuất nhập khẩu. Ngoài ra, đội ngũ tư
                vấn hỗ trợ phản hồi thành công dựa trên nghiên cứu giá chính xác
                về hàng hóa xuất nhập khẩu tại Việt Nam. <br />
              </div>
            )}
          </div>
          <div
            className="text-primary description123"
            onClick={() => setAntiD(!antiD)}
          >
            {antiD ? "Thu gọn" : "Xem thêm"}
          </div>
        </div>
      );
    },
    CustomsDecitionComplaint: (custom, setCustom) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-bookmarks-outline"></i>
        </div>
        <h4 className="title">Dịch vụ khiếu nại quyết định hải quan</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau: <br />
          <ul>
            <li>Đơn phản đối quyết định ấn định thuế của Tổng cục Hải quan</li>
            <li>Thủ tục khiếu nại quyết định về thuế của Tổng cục Hải quan</li>
            <li>Xem xét lại quyết định về HS </li>
            <li>Khác</li>
          </ul>
          {custom && (
            <div>
              <span className="span__description">
                Tại sao việc Khiếu nại quyết định Hải Quan lại quan trọng?
              </span>
              <br />
              Quyết định hải quan có sức ảnh hưởng rất lớn đến hoạt động, tài
              chính và vận hành trong doanh nghiệp liên quan đến xuất nhập khẩu.
              Nhưng trong thực tế, đôi khi doanh nghiệp cảm thấy chưa thỏa đáng
              về một số quyết định của hải quan như về mã HS, phân luồng hay xử
              phạt… Tuy nhiên, do chưa nhiều kinh nghiệm và chuyên môn về pháp
              lý, quy định, thủ tục nên doanh nghiệp vẫn còn nhiều lúng túng dẫn
              đến việc khiếu nại gặp nhiều khó khăn, thiếu hợp lý và không thành
              công.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, chúng tôi cung cấp
              đội ngũ chuyên gia tư vấn và phân tích giàu kinh nghiệm, hàng đầu
              trong lĩnh vực thương mại và hải quan. Chuyên gia tư vấn UNI mảng
              pháp lý sẽ kết nối với các chuyên gia mảng liên quan khác để hỗ
              trợ doanh nghiệp xem xét các quyết định hải quan, thực hiện các
              thủ tục, giấy tờ để khiểu nại quyết định hợp lý và nhanh chóng
              nhất. UNI hỗ trợ doanh nghiệp tất cả các vấn đề liên quan đến tất
              cả hàng hóa xuất nhập khẩu.
              <br />
              <span className="span__description">
                UNI có thể hỗ trợ khách hàng như thế nào?
              </span>
              <br />
              Mục tiêu của chúng tôi là tích hợp các dịch vụ kiểm tra số liệu,
              quản lý và tư vấn các hoạt động xuất nhập khẩu cho doanh nghiệp.
              Ngoài ra, đội ngũ tư vấn có thể hỗ trợ về phân loại chính xác các
              mặt hàng và chứng nhận xuất xứ để nhận được các lợi ích về thuế
              quan, cũng như tư vấn trong suốt quá trình thương mại.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setCustom(!custom)}
        >
          {custom ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    FTA: (fta, setFta) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-paper-outline"></i>
        </div>
        <h4 className="title">Dịch vụ tư vấn FTA-CO</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
          <ul>
            <li>EU-VIET FTA / CPTPP</li>
            <li>
              Đăng ký cấp Giấy chứng nhận GSP, mã số REX – Tự chứng nhận xuất xứ
            </li>
            <li>Đăng ký giấy phép xuất khẩu </li>
            <li>Tư vấn áp dụng FTA cho từng sản phẩm, ngành hàng cụ thể </li>
            <li>Khác </li>
          </ul>
          {fta && (
            <div>
              <span className="span__description">
                Tại sao việc kiểm tra số liệu doanh nghiệp lại quan trọng?
              </span>
              <br />
              Trong bối cảnh hội nhập kinh tế toàn cầu, mở rộng tự do hóa thương
              mại, thời gian qua Việt Nam rất tích cực tham gia đàm phán, ký kết
              các Hiệp FTA song phương và đa phương. FTA là một thỏa thuận giữa
              hai hay nhiều quốc gia hoặc vùng lãnh thổ nhằm mục đích tự do hóa
              thương mại về một hoặc một số nhóm mặt hàng nào đó bằng việc cắt
              giảm thuế quan. Để hưởng lợi ưu đãi từ các FTA, doanh nghiệp cũng
              cần đáp ứng được rất nhiều yêu cầu về giấy tờ, chứng nhận, quy tắc
              chặt chẽ về thủ tục đầu tư, hải quan, thuận lợi hóa thương mại,
              tiêu chuẩn kỹ thuật, các biện pháp kiểm dịch động, thực vật, sở
              hữu trí tuệ… đòi hỏi các DN Việt Nam cần nắm rõ và áp dụng linh
              hoạt, trung thực theo quy định.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, chúng tôi cung cấp
              đội ngũ chuyên gia tư vấn và phân tích giàu kinh nghiệm, hàng đầu
              trong lĩnh vực thương mại và hải quan. Chuyên gia tư vấn UNI mảng
              pháp lý sẽ tích cực hỗ trợ doanh nghiệp thực hiện các thủ tục,
              giấy tờ tận dụng triệt để các FTA. Hỗ trợ doanh nghiệp tất cả các
              vấn đề liên quan đến tất cả hàng hóa xuất nhập khẩu.
              <br />
              <span className="span__description">
                UNI có thể hỗ trợ khách hàng như thế nào?
              </span>
              <br />
              Mục tiêu của chúng tôi là cung cấp dịch vụ kiểm tra số liệu, quản
              lý và tư vấn các hoạt động sau thông quan giúp doanh nghiệp. Ngoài
              ra, đội ngũ tư vấn có thể hỗ trợ về phân loại chính xác các mặt
              hàng và chứng nhận xuất xứ để nhận được các lợi ích về thuế quan,
              cũng như tư vấn trong suốt quá trình thương mại. Các phương tiện
              truyền thông khác nhau, công văn, quyết định thuế và quy định cần
              được theo dõi chặt chẽ, nghiên cứu và phản hồi kịp thời khi có
              thông tin và nội dung mới…
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setFta(!fta)}
        >
          {fta ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    Sale: (sale, setSale) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-speedometer-outline"></i>
        </div>
        <h4 className="title">
          Xác nhận ưu đãi dự án sản xuất sản phẩm công nghiệp
        </h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <ul>
            <li>
              Review Giấy xác nhận ưu đãi “dự án sản xuất sản phẩm công nghiệp
              hỗ trợ” (Support Industry Certificate)
            </li>
            <li>
              Chuẩn bị hồ sơ cấp Giấy xác nhận ưu đãi “dự án sản xuất sản phẩm
              công nghiệp hỗ trợ”
            </li>
            <li>
              Hỗ trợ quản lý và duy trì Giấy xác nhận ưu đãi “dự án sản xuất sản
              phẩm công nghiệp hỗ trợ
            </li>
          </ul>
          {sale && (
            <div>
              <span className="span__description">
                Tại sao doanh nghiệp lại cần Giấy xác nhận ưu đãi “dự án sản
                xuất sản phẩm công nghiệp hỗ trợ”?
              </span>
              <br />
              Công nghiệp hỗ trợ theo khái niệm của nghị định 111/2015/NĐ-CP, là
              các ngành công nghiệp sản xuất nguyên liệu, vật liệu, linh kiện và
              phụ tùng để cung cấp cho sản xuất sản phẩm hoàn chỉnh. Theo khảo
              sát, ngành công nghiệp hỗ trợ của Việt Nam đang ngày càng phát
              triển và có vai trò quan trọng trong việc tham gia vào chuỗi cung
              ứng toàn cầu.
              <br />
              Do đó, Việt Nam đang ưu tiên chú trọng thúc đẩy các ngành công
              nghiệp này thông qua các chính sách ưu đãi hấp dẫn cho các doanh
              nghiệp hoạt động trong lĩnh vực này. Tuy nhiên, để hưởng được các
              chế độ ưu đãi này, đòi hỏi doanh nghiệp phải nắm rõ các điều kiện,
              cũng như là các trình tự, thủ tục để được cấp Giấy xác nhận ưu đãi
              “dự án sản xuất sản phẩm công nghiệp hỗ trợ”.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, chúng tôi cung cấp
              đội ngũ chuyên gia tư vấn và phân tích giàu kinh nghiệm, hàng đầu
              trong lĩnh vực thương mại và hải quan. Chuyên gia tư vấn UNI mảng
              pháp lý sẽ tích cực hỗ trợ doanh nghiệp thực hiện các thủ tục,
              giấy tờ để được cấp Giấy xác nhận ưu đãi “dự án sản xuất sản phẩm
              công nghiệp hỗ trợ”. Hỗ trợ doanh nghiệp tất cả các vấn đề liên
              quan đến ngành công nghiệp hỗ trợ nhanh chóng và chính xác nhất.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setSale(!sale)}
        >
          {sale ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    Logistics: (logistic, setLogistic) => (
      <div
        id="logistics"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-barcode-outline"></i>
        </div>
        <h4 className="title">Dịch vụ Logistics</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
          <ul>
            <li>Đại lý hải quan </li>
            <li>Trị giá hải quan </li>
            <li>Tư vấn xuất nhập khẩu </li>
            <li>Đăng ký giấy phép xuất khẩu Certificate of origin (C/O) </li>
            <li>Xuất nhập khẩu ủy thác</li>
            <li>Vận chuyển đường biển/hàng không/chuyển phát nhanh </li>
            <li>Vận tải nội địa</li>
            <li>Domestic transport </li>
            <li>Dịch vụ vận chuyển container và hàng rời</li>
            <li>Khác </li>
          </ul>
          {logistic && (
            <div>
              <span className="span__description">
                Tại sao dịch vụ logistics lại quan trọng?
              </span>
              <br />
              Logistics là khâu trung gian để đưa hàng hoá (sản phẩm hoặc dịch
              vụ) đến tay người tiêu dùng nhanh nhất. Nó sẽ bao gồm các hoạt
              động vận tải hàng hóa xuất và nhập, quản lý đội tàu, kho bãi,
              nguyên vật liệu, thực hiện đơn hàng, quản trị tồn kho, hoạch định
              cung cầu. Ngoài ra dịch vụ Logistics cũng sẽ kiêm luôn việc tìm
              kiếm nguồn nguyên liệu đầu vào, lập kế hoạch sản xuất, đóng gói
              sản phẩm, dịch vụ khách hàng... Để chuyên môn hóa công việc và
              tiết kiệm thời gian, chi phí, thì các doanh nghiệp sử dụng dịch vụ
              logistics.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, chúng tôi cam kết
              kết nối doanh nghiệp với đội ngũ chuyên gia tư vấn và phân tích
              giàu kinh nghiệm, hàng đầu trong lĩnh vực thương mại và hải quan.
              Các chuyên gia UNI sẽ thay doanh nghiệp thực hiện thông quan hàng
              hóa, book tàu, container, vận chuyển nội địa. Hỗ trợ doanh nghiệp
              về tư vấn về cách nhập khẩu nguyên liệu miễn thuế, logistics, tận
              dụng các FTA, nhập thiết bị máy móc,... nhanh chóng, hiểu quả với
              chi phí tối ưu nhất.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setLogistic(!logistic)}
        >
          {logistic ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    MarketReseach: (market, setMarket) => (
      <div
        id="marketreseach"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-people-outline"></i>
        </div>
        <h4 className="title">Dịch vụ nghiên cứu thị trường</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          UNI có thể hỗ trợ doanh nghiệp xuyên suốt quy trình lập chiến lược đầu
          tư cũng như tư vấn chuỗi các vấn đề bao gồm:
          <ul>
            <li>Kỹ năng bí quyết ngành xuất nhập khẩu Việt Nam </li>
            <li>Phân tích thông tin nhập và xuất </li>
            <li>Tìm ra đối tượng khách hàng mục tiêu chính xác </li>
            <li>
              Cung cấp thông tin chính xác về số lượng và giá cả xuất nhập khẩu
            </li>
            <li>Kết nối đối tác </li>
            <li>Thông tin đối thủ cạnh tranh</li>
            <li>Khác </li>
          </ul>
          {market && (
            <div>
              <span className="span__description">
                Tại sao việc tư vấn nghiên cứu thị trường lại quan trọng?
              </span>
              <br />
              Chìa khóa thành công cho bất kỳ doanh nghiệp nào là việc thấu hiểu
              khách hàng muốn gì, vượt qua đối thủ cạnh tranh và giành lợi thế
              trên thị trường. Để tìm hiểu và đưa ra được các giải pháp tối ưu
              nhất, doanh nghiệp cần thực hiện một quy trình gọi là “Nghiên cứu
              thị trường”. Tuy nhiên, nếu chưa có nhiều kinh nghiệm và thông tin
              thì doanh nghiệp sẽ mất rất nhiều thời gian và rất chi phí cho
              nghiên cứu, thậm chí kết quả không chính xác dẫn đến quyết định
              kinh doanh sai lầm.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, UNI là công ty tư
              vấn, cung cấp dịch vụ chuyên nghiệp, uy tín cho các doanh nghiệp
              kinh doanh xuất nhập khẩu, sản xuất và doanh nghiệp nước ngoài đầu
              tư tại Việt Nam. Qua quá trình thực tế, chúng tôi cung cấp và kết
              nối đội ngũ chuyên gia tư vấn giàu kinh nghiệm, luôn sẵn sàng lắng
              nghe và đưa ra giải pháp hiệu quả tốt nhất cho doanh nghiệp.
              <br />
              <span className="span__description">
                UNI có thể hỗ trợ khách hàng như thế nào?
              </span>
              <br />
              Mục tiêu của chúng tôi là cung cấp dịch vụ tích hợp thu thập số
              liệu, phân tích và đề xuất giải pháp, giúp doanh nghiệp đưa ra
              chiến lược tối ưu. Ngoài ra, đội ngũ UNI cũng được chuyên môn hóa
              các bộ phận, bao gồm:
              <br />
              <ul>
                <li>Chuyên gia xuất nhập khẩu, hải quan </li>
                <li>
                  Nhóm tư vấn theo lĩnh vực:
                  <ul>
                    <li>Nhóm tư vấn pháp lý </li>
                    <li>Nhóm tư vấn kế toán </li>
                    <li>Nhóm thương mại quốc tế </li>
                    <li>Nhóm CNTT xử lý dữ liệu lớn </li>
                  </ul>
                </li>
              </ul>
              Đặc biệt, đội ngũ chuyên viên về nghiên cứu thị trường của chúng
              tôi luôn chú tâm đến các vấn đề thủ tục, pháp lý, cơ hội và thách
              thức phát sinh từ thị trường cho từng mục tiêu của doanh nghiệp.
              Do đó, UNI giúp khách hàng dễ dàng nắm bắt xu hướng, quản lý rủi
              ro tiềm tàng, xác định cơ hội và giành lợi thế cạnh tranh, đưa ra
              được các chiến lược hiệu quả.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setMarket(!market)}
        >
          {market ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    Setup: (rebuild, setRebuild) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-home-outline"></i>
        </div>
        <h4 className="title">Dịch vụ tư vấn setup nhà máy mới</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
          <br />
          Set up nhà máy: <br />
          <ul>
            <li>Tư vấn nhập khẩu nguyên liệu miễn thuế </li>
            <li>
              Tư vấn giao nhận hàng hóa
              <ul>
                <li>Tư vấn sử dụng FTA </li>
                <li>Accounting consulting group </li>
                <li>Machinery import consulting </li>
                <li>Tư vấn nhập khẩu thiết bị máy móc </li>

                <li>
                  Đại lý hải quan làm thủ tục đăng ký mới M&A:
                  <ul>
                    <li>Kiểm toán thuế quan mô phỏng </li>
                    <li>Đánh giá rủi ro hải quan </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {rebuild && (
            <div>
              <span className="span__description">
                Tại sao tư vấn set up nhà máy và tư vấn M&A lại quan trọng?
              </span>
              <br />
              Để nhà máy đưa vào vận hành và kinh doanh hoặc mua lại và sáp nhập
              thì doanh nghiệp phải đối mặt với một lượng lớn công việc như khảo
              sát thị trường, lựa chọn mặt bằng, chuẩn bị thủ tục giấy tờ pháp
              lý, lên kế hoạch kinh doanh,… Vì thế nhằm tiết kiệm thời gian, chi
              phí, giảm thiểu rủi ro và tối ưu hiệu quả ngay từ đầu, hiện nay
              nhiều doanh nghiệp đã lựa chọn dịch vụ setup nhà máy đến từ các
              đơn vị chuyên nghiệp thay vì tự mình làm lấy.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, chúng tôi kết nối
              doanh nghiệp với đội ngũ chuyên gia tư vấn và phân tích giàu kinh
              nghiệm, hàng đầu trong lĩnh vực thương mại và hải quan. Các chuyên
              gia UNI hỗ trợ doanh nghiệp về tư vấn về cách nhập khẩu nguyên
              liệu miễn thuế, logistics, tận dụng các FTA, nhập thiết bị máy
              móc, thủ tục hải quan...Giúp doanh nghiệp tiết kiệm chi phí, hạn
              chế rủi ro và thuận lợi set up nhà máy hoặc M&A.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setRebuild(!rebuild)}
        >
          {rebuild ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    Tariff: (tariff, setTariff) => (
      <div
        id="tariff"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-flower-outline"></i>
        </div>
        <h4 className="title">Dịch vụ thông quan</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
          <br />
          <ul>
            <li>Đại lý hải quan </li>
            <li>Trị giá hải quan </li>
            <li>Kiểm tra về mã HS </li>
            <li>Tư vấn quản lý nguyên liệu miễn thuế</li>
            <li>Khác </li>
          </ul>
          {tariff && (
            <div>
              <span className="span__description">
                Tại sao dịch vụ thông quan hàng hóa lại quan trọng?
              </span>
              <br />
              Hiện nay trong thời kì hội nhập quốc tế, các thủ tục thông quan đã
              được giảm đi đáng kể. Tuy nhiên, do vẫn còn nhiều vướng mắc trong
              thủ tục cũng như doanh nghiệp chưa nắm chắc chuyên môn và kinh
              nghiệm, nên rất nhiều doanh nghiệp vẫn gặp rất nhiều vấn đề về
              thông quan hàng hóa như mã HS, C/O không hợp lệ, chi phí thương
              mại lớn, tốn thời gian… Do đó, các doanh nghiệp cần một bên tư vấn
              chuyên nghiệp để hỗ trợ và thay mình làm chính xác công việc đó
              nhằm tiết tiệm thời gian, chi phí cũng như giảm thiểu rủi ro cho
              doanh nghiệp.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, chúng tôi cam kết
              kết nối doanh nghiệp với đội ngũ chuyên gia tư vấn và phân tích
              giàu kinh nghiệm, hàng đầu trong lĩnh vực thương mại và hải quan.
              Các chuyên gia UNI sẽ thay doanh nghiệp thực hiện thông quan hàng
              hóa, hỗ trợ doanh nghiệp về tư vấn về cách nhập khẩu nguyên liệu
              miễn thuế, logistics, tận dụng các FTA, nhập thiết bị máy móc,...
              nhanh chóng, hiểu quả với chi phí tối ưu nhất.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setTariff(!tariff)}
        >
          {tariff ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
    Tax: (tax, setTax) => (
      <div
        id="tax"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-book-outline"></i>
        </div>
        <h4 className="title">Dịch vụ kiểm tra số liệu sau thông quan</h4>
        <div className="description">
          <span className="span__description">
            Dịch vụ chuyên gia UNI cung cấp:
          </span>
          <br />
          Đội ngũ chuyên gia tại UNI cung cấp các hạng mục sau:
          <br />
          <ul>
            <li>Kiểm tra dữ liệu nhập xuất tồn của doanh nghiệp chế xuất</li>
            <li>Quản lý Balance cho doanh nghiệp chế xuất </li>
            <li>Xử lý báo cáo quyết toán </li>
            <li>Thanh khoản hàng gia công và sản xuất xuất khẩu </li>
            <li>Tư vấn quản lý hàng tồn kho và vật tư tiêu hao </li>
            <li>Báo cáo tài chính </li>
            <li>Tư vấn hoàn thuế </li>
            <li>Khác </li>
          </ul>
          {tax && (
            <div>
              <span className="span__description">
                Tại sao việc kiểm tra số liệu doanh nghiệp lại quan trọng?
              </span>
              <br />
              Trong những năm gần đây, công tác thực hiện thủ tục hải quan đã
              được cơ quan nhà nước cải cách và rút ngắn đi rất nhiều để tạo
              thuận lợi cho doanh nghiệp. Chính vì thế, hải quan cũng thắt chặt
              việc kiểm tra sau thông quan của hàng hóa nhiều hơn nhằm mục đích
              kiểm tra tính trung thực, hợp lý và độ tin cậy của các thông tin
              chủ hàng đã khai báo.
              <br />
              <span className="span__description">
                Tại sao nên chọn UNI làm đơn vị tư vấn
              </span>
              <br />
              Với kiến thức chuyên sâu và hiểu biết thực tế, UNI là công ty tư
              vấn, cung cấp dịch vụ chuyên nghiệp, uy tín cho các doanh nghiệp
              kinh doanh xuất nhập khẩu, sản xuất và doanh nghiệp nước ngoài đầu
              tư tại Việt Nam. Qua quá trình làm việc thực tế, chúng tôi cung
              cấp đội ngũ chuyên gia tư vấn và phân tích giàu kinh nghiệm, hàng
              đầu trong lĩnh vực thương mại và hải quan. Chuyên gia tư vấn UNI
              thực hiện (giải quyết) các công việc chung liên quan đến thuế hải
              quan và thông quan liên quan đến tất cả hàng hóa xuất nhập khẩu.
              <br />
              <span className="span__description">
                UNI có thể hỗ trợ khách hàng như thế nào?
              </span>
              <br />
              Mục tiêu của chúng tôi là cung cấp dịch vụ kiểm tra số liệu, quản
              lý và tư vấn các hoạt động sau thông quan giúp doanh nghiệp. Ngoài
              ra, đội ngũ tư vấn có thể hỗ trợ về phân loại chính xác các mặt
              hàng và chứng nhận xuất xứ để nhận được các lợi ích về thuế quan,
              cũng như tư vấn trong suốt quá trình thương mại. Các phương tiện
              truyền thông khác nhau, công văn, quyết định thuế và quy định cần
              được theo dõi chặt chẽ, nghiên cứu và phản hồi kịp thời khi có
              thông tin và nội dung mới… <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setTax(!tax)}
        >
          {tax ? "Thu gọn" : "Xem thêm"}
        </div>
      </div>
    ),
  },
  KO: {
    AntiDumping: (antiD, setAntiD) => {
      return (
        <div
          id="antidumping"
          className="col-lg-12 col-md-6 box wow bounceInUp"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-analytics-outline"></i>
          </div>
          <h4 className="title">Anti-dumping</h4>
          <div className="description">
            <span className="span__description">
              UNI 전문 서비스는 다음을 제공합니다:
            </span>
            <br />
            UNI의 팀 전문가는 다음과 같은 범주를 제공합니다.
            <ul>
              <li>덤핑 조사 단계 대응 지원</li>
              <li>반덤핑 제소 지원</li>
              <li>베트남 수입자 구제 지원</li>
              <li>Safe Guard 조사 대응 지원</li>
            </ul>
            {antiD && (
              <div>
                <span className="span__description">
                  반덤핑 제외 요청을 준비하는 것이 왜 중요합니까?
                </span>
                <br />
                현재 베트남은 세계 경제 교류를 추진하고 있기 때문에 상품은 점점
                더 베트남으로 수입되고 있습니다. 그러나 수입량의 증가로 인하여
                국내 산업이 피해를 입을 가능성이 있다면, 베트남에 해당 상품의
                수입수량을 제한하기 위해 무역구제조치를 취하게 될 것입니다.
                반덤핑관세는 이러한 무역 구제 중하나입니다. 그러나 현재 기업은
                반덤핑 조치에 대한 대응경험이 많지 않습니다. 덤핑관세 대응에
                실패할 경우, 고세율의 반덤핑관세가 부과되고, 이로 인해
                베트남시장을 상실할 위험이 있습니다. 베트남 시장이 비중이 높은
                경우 회사 존립마저 위태로울 수 있습니다. 글로벌시대에 무역분쟁
                대응이 기업의 경영활동에 큰 이슈로 떠오르는 이유 입니다. <br />
                <span className="span__description">
                  UNI를 컨설턴트로 선택해야 하는 이유
                </span>
                <br />
                UNI는 베트남 무역 및 관세 분야에서 오랜 경험을 토대로 숙련된
                컨설턴트 및 분석가들로 팀을 구성하여 대응조치를 지원합니다.
                UNI는 반덤핑 조사 단계 및 면제 신청 과제들을 신속, 정확하고
                전문적인 대응을 지원합니다. 예를 들어, 무역분쟁의 경우
                조사단계에서 기업에게 복잡하고 방대한 자료를 요청하는 경우가
                많습니다. 특히 반덤핑 조사의 경우, 베트남 산업통상부(MoIT)에서는
                전반적인 회사정보, 내수판매 및 수출에 대한 정확한 원가자료와
                증명을 방대하게 요청합니다. 이러한 자료를 정확하게 제출하기
                위해서는 많은 시간과 인력이 소요됩니다. 부정확하거나 일관성이
                없는 자료의 경우에는 인정되지 않습니다. 따라서, 전문가의 조력을
                통한 조사 대응으로 효과적인 대응이 피해를 최소화하고, 오히려
                타기업보다 관세 우위를 점하게 되어, 위기를 기회로 만들 수
                있습니다.
                <br />
                <span className="span__description">
                  UNI는 고객을 어떻게 지원할 수 있습니까?
                </span>
                <br />
                우리의 목표는 수입 및 수출에 대한 반덤핑 관세를 최소화하기 위한
                절차에 컨설팅, 지원 및 고객 표현 서비스를 제공하는 것입니다.
                또한 컨설팅팀은 베트남 수출입 정확한 가격 조사를 바탕으로
                성공적인 대응을 지원합니다. <br />
              </div>
            )}
          </div>
          <div
            className="text-primary description123"
            onClick={() => setAntiD(!antiD)}
          >
            Show {antiD ? "Less" : "More"}
          </div>
        </div>
      );
    },
    CustomsDecitionComplaint: (custom, setCustom) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-bookmarks-outline"></i>
        </div>
        <h4 className="title">세관 결정에 대한 불복 절차 </h4>
        <div className="description">
          <span className="span__description">
            UNI 전문가가 제공하는 서비스:
          </span>
          <br />
          UNI의 전문가 팀은 다음 범주 서비스를 제공합니다. <br />
          <ul>
            <li>세관당국의 조세 부과 결정에 대한 이의신청</li>
            <li>세관당국의 세금 부과 결정에 대한 불복절차</li>
            <li>HS심사 및 결정/결정에 대한 재심사 </li>
            <li>기타 세관 결정에 대한 컨설팅 </li>
          </ul>
          {custom && (
            <div>
              <span className="span__description">
                세관 결정에 대한 불복절차는 왜 필요한가요?
              </span>
              <br />
              세관 결정은 수출입과 관련된 사업의 재정 및 운영에 막대한 영향을
              미칩니다. 그러나 실제 기업은 HS 코드, 면세처리 또는 세관절차 등
              세관 결정이 부당하다고 생각하는 경우가 있습니다. 그러나 기업은
              법규 및 규정 해석 경험과 전문성이 부족하고, 불복절차는 복잡하고
              까다롭습니다. 이에 기업은 세관 결정의 불만족에도 불구하고,
              불복절차 진행을 꺼리게 됩니다.
              <br />
              <span className="span__description">
                관세UNI를 선택해야 하는 이유는?
              </span>
              <br />
              심층적인 지식과 실무적인 이해를 통해 우리는 무역 및 관세 분야에서
              다년간 노하우를 쌓은 분석전문가들로 구성된 팀을 제공합니다. 특히
              관세 UNI는 다른 관련 전문가와 연결하여 기업이 관세 결정을 검토하고
              합리적이고 신속하게 결정에 항소하기 위한 절차 및 문서를 수행할 수
              있도록 지원합니다. UNI는 모든 수출입, 통관 및 관세 관련된 모든
              문제에 애로를 겪고 있는 기업을 지원합니다. <br />
              <span className="span__description">
                UNI는 고객을 어떻게 지원할 수 있습니까?
              </span>
              <br />
              우리의 목표는 데이터 확인, 기업의 수출입 활동 관리 및 컨설팅
              서비스를 통합하는 것입니다. 또한 컨설팅 팀은 관세 혜택을 받을 수
              있는 품목의 올바른 분류 및 원산지 인증을 지원하고 무역 프로세스
              전반에 걸쳐 조언을 제공할 수 있습니다.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setCustom(!custom)}
        >
          Show {custom ? "Less" : "More"}
        </div>
      </div>
    ),
    FTA: (fta, setFta) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-paper-outline"></i>
        </div>
        <h4 className="title">FTA 원산지 컨설팅</h4>
        <div className="description">
          <span className="span__description">관세 유니 FTA 서비스:</span>
          <br />
          다음 분야 FTA 전문 컨설팅 서비스를 제공합니다.
          <ul>
            <li>EU/CPTPP/GSP/한국/일본/아세안/중국 </li>
            <li>컨설팅 원산지증명서 C/O 발급 </li>
            <li>특정 제품 또는 산업별 FTA 기업 내부 관리 시스템 </li>
            <li>기타 FTA 및 원산지 컨설팅 </li>
          </ul>
          {fta && (
            <div>
              <span className="span__description">
                왜 FTA 원산지 컨설팅이 중요합니까?
              </span>
              <br />
              세계 경제 통합 및 무역 자유화 시대 흐름에 맞추어, 베트남은 양자 및
              다자간 FTA 협상 및 서명에 적극적으로 참여해 왔습니다. FTA의 혜택을
              받기 위해서는 엄격한 원산지 기준 충족 및 원산지 입증이 필요합니다.
              따라서 전문가의 도움을 받아 기업 내부 원산지 관리 절차를 정립할
              필요가 있습니다.
              <br />
              <span className="span__description">관세 유니 FTA 컨설팅?</span>
              <br />
              심층적인 지식과 실무적인 이해를 통해 우리는 무역 및 관세 분야에서
              다년간 노하우를 쌓은 분석전문가들로 구성된 팀을 제공합니다. UNI
              컨설팅은 기업의 FTA 활용도를 높이기 위해 필요한 절차와 서류를
              준비할 수 있도록 적극 지원하겠습니다. FTA원산지에 직간접 영향을
              미칠 수 있는 수출입 통관 관련된 문제까지 고려하여 수준 높은
              컨설팅을 지원합니다.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setFta(!fta)}
        >
          Show {fta ? "Less" : "More"}
        </div>
      </div>
    ),
    Sale: (sale, setSale) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-speedometer-outline"></i>
        </div>
        <h4 className="title">Certificate of Incentives</h4>
        <div className="description">
          <span className="span__description">
            UNI 전문 서비스는 다음을 제공합니다.
          </span>
          <br />
          UNI의 전문가 팀은 다음과 같은 범주를 제공합니다.
          <ul>
            <li>SI인증(부품소재산업인증) 사전 검토 </li>
            <li>SI 인증(부품소재산업인증) 신청 대행 </li>
            <li>SI인증 관리 및 유지 지원 </li>
          </ul>
          {sale && (
            <div>
              <span className="span__description">
                왜 기업은 인센티브 인증 "부품소재 공급 사업" 인센티브 기업
                인증이 필요합니까?
              </span>
              <br />
              법령 111/2015/ND-CP에 따라 Support Industry certificate(SI인증
              또는 부품소재산업인증)은 완제품 조립에 사용되는 제조 재료,
              액세서리, 부품 및 예비 부품을 공급하는 산업분야입니다. 설문 조사에
              따르면, SI(부품소재)산업은 베트남 산업이 성장하고 글로벌 공급망에
              참여하는 데 중요한 역할을 하고 있습니다.
              <br />
              따라서 베트남은 이 분야에서 사업을 영위하는 기업에게 매력적인 우대
              정책을 제공하고 있으며 부품소재산업 진흥에 중점을 두고 있습니다.
              그러나 이런 제도적인 혜택을 즐기기 위해서는 기업이 조건과
              신청절차를 거쳐, “해당 사업이 제품 제조 지원(부품소재) 산업"임을
              인정받아야 합니다. <br />
              <span className="span__description">
                UNI 컨설팅을 선택해야 하는 이유
              </span>
              <br />
              심층적인 지식과 실무적인 이해를 통해 우리는 무역 및 관세 분야에서
              다년간 노하우를 쌓은 분석전문가들로 구성된 팀을 제공합니다. 특히,
              베트남 산업통상부와 무역분쟁 각종 인증 업무 처리 경험이 있습니다.
              SI인증(부품소재산업인증)의 주부부처인 MoIT와 깊은 유대관계를
              형성하고 있습니다. 유니 컨설팅은 기업이 "부품소재산업 지원"에
              특혜를 부여할 수 있도록 모든 절차와 서류를 지원할 것입니다. SI
              (부품소재)산업과 관련된 모든 문제를 신속하고 정확하게
              지원하겠습니다.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setSale(!sale)}
        >
          Show {sale ? "Less" : "More"}
        </div>
      </div>
    ),
    Logistics: (logistic, setLogistic) => (
      <div
        id="logistics"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-barcode-outline"></i>
        </div>
        <h4 className="title">Logistics</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <ul>
            <li>Import/export/local export clearance Agency</li>
            <li>Import price(Tariff assessment)</li>
            <li>Import and export consulting</li>
            <li>Consulting certificate of origin C/O </li>
            <li>Register for export license Certificate of origin (C/O)</li>
            <li>Import-export authorization</li>
            <li>Sea/air/express shipping </li>
            <li>Domestic transport </li>
            <li>Container and bulk cargo transportation </li>
            <li>Other </li>
          </ul>
          {logistic && (
            <div>
              <span className="span__description">
                Why is logistics service important?
              </span>
              <br />
              Logistics is an intermediary stage to bring goods (products or
              services) to consumers as quickly as possible. It will include
              inbound and outbound freight operations, fleet management,
              warehousing, raw materials, order fulfillment, inventory
              management, and supply and demand planning. In addition, Logistics
              services will also concurrently find input materials, production
              planning, product packaging, customer service... To specialize
              work and save time and costs. , then businesses use logistics
              services.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we are
              committed to connecting businesses with a team of experienced,
              leading consultants and analysts in the field of trade and
              customs. UNI experts will act on behalf of businesses to carry out
              customs clearance of goods, book ships, containers, and domestic
              transportation. Support businesses in consulting on how to import
              tax-free materials, logistics, take advantage of FTAs, import
              equipment and machinery, ... quickly, efficiently with the most
              optimal cost.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setLogistic(!logistic)}
        >
          Show {logistic ? "Less" : "More"}
        </div>
      </div>
    ),
    MarketReseach: (market, setMarket) => (
      <div
        id="marketreseach"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-people-outline"></i>
        </div>
        <h4 className="title">Market reseach</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          UNI can support businesses through the investment strategy making
          process as well as advise on a series of issues including:
          <ul>
            <li>Skills and know-how in Vietnam's import-export industry </li>
            <li>Analyze input and output information </li>
            <li>Find out the exact target audience </li>

            <li>
              Provide accurate information on import and export quantities and
              prices
            </li>
            <li>Partner connection </li>
            <li>Competitor information </li>
            <li>Other</li>
          </ul>
          {market && (
            <div>
              <span className="span__description">
                Why is market research consulting important?
              </span>
              <br />
              The key to success for any business is to understand what your
              customers want, outshine your competition, and gain an edge in the
              market. To find out and come up with the most optimal solutions,
              businesses need to carry out a process called "Market Research".
              However, without much experience and information, businesses will
              spend a lot of time and money on research, even inaccurate
              results, leading to wrong business decisions. Therefore,
              entrepreneurs will need to a professional agency to take care of
              it better.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, UNI is a
              consulting company, specializing in providing professional and
              prestigious services for import-export, manufacturing and
              foreign-invested enterprises in Vietnam. Through the actually
              working process, we provide and connect a team of experienced
              consultants who are always ready to listen and offer the best
              effective solutions for businesses.
              <br />
              <span className="span__description">
                How can UNI support customers?
              </span>
              <br />
              Our goal is to provide an integrated service of collecting data,
              analyzing and proposing solutions, helping businesses come up with
              an optimal strategy. In addition, the UNI team also specializes in
              parts, including:
              <br />
              <ul>
                <li>Import and export specialist, customs </li>
                <li>
                  Consulting group by field:
                  <ul>
                    <li>Legal advisory group </li>
                    <li>Accounting consulting group </li>
                    <li>International trade group </li>
                    <li>IT team handling big data </li>
                  </ul>
                </li>
              </ul>
              In particular, our team of market research specialists always pay
              attention to procedural, legal issues, opportunities and
              challenges arising from the market for each business objective.
              Therefore, UNI makes it easy for customers to grasp trends, manage
              potential risks, identify opportunities and gain competitive
              advantages, and devise effective strategies.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setMarket(!market)}
        >
          Show {market ? "Less" : "More"}
        </div>
      </div>
    ),
    Setup: (rebuild, setRebuild) => (
      <div
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-home-outline"></i>
        </div>
        <h4 className="title">Factory setup/ Re-building/ M&A</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <br />
          Factory set-up: <br />
          <ul>
            <li>Import material tax refund consulting </li>
            <li>
              Cargo forwarding consulting
              <ul>
                <li>FTA usage consulting </li>
                <li>Accounting consulting group </li>
                <li>Machinery import consulting </li>
                <li>
                  Agency of customs new registration procedure M&A:
                  <ul>
                    <li>Simulated tariff audit</li>
                    <li>Customs risks assessment</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          {rebuild && (
            <div>
              <span className="span__description">
                Why are factory setup and M&A consulting important?
              </span>
              <br />
              In order for the factory to be put into operation and business or
              to be acquired and merged, enterprises have to face a large amount
              of work such as market survey, site selection, legal paperwork
              preparation, planning. Therefore, in order to save time, costs,
              minimize risks and optimize efficiency from the very beginning,
              many businesses now choose factory setup services from
              professional units instead of professional companies. for doing it
              yourself.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we connect
              businesses with a team of experienced consultants and analysts,
              leading in the field of trade and customs. UNI experts support
              businesses with advice on how to import tax-free materials,
              logistics, take advantage of FTAs, import machinery and equipment,
              customs procedures... Help businesses save costs and limit Risks
              and advantages of setting up a factory or M&A.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setRebuild(!rebuild)}
        >
          Show {rebuild ? "Less" : "More"}
        </div>
      </div>
    ),
    Tariff: (tariff, setTariff) => (
      <div
        id="tariff"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-flower-outline"></i>
        </div>
        <h4 className="title">Tariff & Clearance</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <br />
          <ul>
            <li>Import/export/local export clearance Agency </li>
            <li>
              Import price(Tariff assessment)
              <li>HS Code dispute prevention </li>
              <li>Import tax refund code consulting </li>
              <li>Other </li>
            </li>
          </ul>
          {tariff && (
            <div>
              <span className="span__description">
                Why is the customs clearance service important?
              </span>
              <br />
              Currently, in the period of international integration, customs
              clearance procedures have been significantly reduced. However,
              because there are still many problems in the procedures as well as
              businesses do not know the expertise and experience, many
              businesses still face many problems with customs clearance of
              goods such as HS code, invalid C/O. Therefore, businesses need a
              professional consultant to support and do exactly that job on
              their behalf in order to save time, costs as well as minimize
              risks. risk for the business.
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we are
              committed to connecting businesses with a team of experienced,
              leading consultants and analysts in the field of trade and
              customs. UNI experts will act on behalf of enterprises to carry
              out customs clearance of goods, support businesses with advice on
              how to import tax-free materials, logistics, take advantage of
              FTAs, import equipment and machinery,... quickly, efficiency with
              the most optimal cost.
              <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setTariff(!tariff)}
        >
          Show {tariff ? "Less" : "More"}
        </div>
      </div>
    ),
    Tax: (tax, setTax) => (
      <div
        id="tax"
        className="col-lg-12 col-md-6 box wow bounceInUp"
        data-wow-delay="0.1s"
        data-wow-duration="1.4s"
      >
        <div className="icon">
          <i className="ion-ios-book-outline"></i>
        </div>
        <h4 className="title">Tax refund material balance management</h4>
        <div className="description">
          <span className="span__description">
            Services UNI experts provide:
          </span>
          <br />
          The team of experts at UNI offers the following items:
          <br />
          <ul>
            <li>
              Check import and export data of export processing enterprises
            </li>
            <li>Balance management for export processing enterprises</li>
            <li>Export processing Liquidation</li>
            <li>Consumption, stock management consulting</li>
            <li>Financial reports</li>
            <li>Tax refund consulting </li>
            <li>Others </li>
          </ul>
          {tax && (
            <div>
              <span className="span__description">
                Why is it important to check data after customs clearance?
              </span>
              <br />
              In recent years, the implementation of customs procedures has been
              reformed and shortened greatly by state agencies to facilitate
              businesses. Therefore, customs also tightened the post-clearance
              inspection of goods more in order to check the truthfulness,
              reasonableness and reliability of the information declared by the
              goods owner. However, if you do not have a lot of experience and
              expertise, it will take a lot of time and a lot of costs for
              businesses such as paying administrative fines, paying additional
              taxes for the amount of imported materials used. improper
              purposes…
              <br />
              <span className="span__description">
                Why should you choose UNI as your consulting unit?
              </span>
              <br />
              With in-depth knowledge and practical understanding, we provide a
              team of experienced consultants and analysts, leading in the field
              of trade and customs. UNI consulting experts in balance field will
              support businesses to perform (settle) general tasks related to
              customs tax and check data after customs clearance in the fastest,
              most accurate and professional way. UNI support businesses with
              all issues related to all import and export goods.
              <br />
              <span className="span__description">
                How can UNI support customers?
              </span>
              <br />
              Our goal is to provide data checking, management and consulting
              services for post-clearance activities to help businesses. In
              addition, the consulting team can assist with the correct
              classification of items and certification of origin to receive
              tariff benefits, as well as advice throughout the trade process.
              Various media, dispatches, tax decisions and regulations need to
              be closely monitored, researched and promptly responded to when
              new information and content becomes available… <br />
            </div>
          )}
        </div>
        <div
          className="text-primary description123"
          onClick={() => setTax(!tax)}
        >
          Show {tax ? "Less" : "More"}
        </div>
      </div>
    ),
  },
};
