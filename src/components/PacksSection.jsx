import "../packs-section.css";

export default function PacksSection() {
  return (
    <section className="hat-packs" id="packs">
      <div className="hat-packs__inner">
        <h2 className="hat-packs__heading">Standard Linen Packs</h2>
        <p className="hat-packs__sub">
          Optical white, white-label, and commercially wash-rated at 60–80°C.
          Every pack is flat-packed and ready for property use.
        </p>
        <div className="hat-packs__grid">
          <div className="hat-pack">
            <div className="hat-pack__top hat-pack__top--teal">
              <p className="hat-pack__tier">Essentials Pack</p>
              <p className="hat-pack__for">Studio / 1-bedroom</p>
              <p className="hat-pack__count">16 pieces</p>
            </div>
            <div className="hat-pack__body">
              <table className="hat-pack__tbl">
                <thead><tr><th>Item</th><th>Qty</th><th>Spec</th><th>Size</th></tr></thead>
                <tbody>
                  <tr><td>Fitted Sheet (Queen)</td><td>2×</td><td>250–300 TC</td><td>153×203 cm</td></tr>
                  <tr><td>Flat Sheet (Queen)</td><td>2×</td><td>250–300 TC</td><td>250×290 cm</td></tr>
                  <tr><td>Pillowcases</td><td>4×</td><td>250–300 TC</td><td>50×75 cm</td></tr>
                  <tr><td>Bath Towels</td><td>4×</td><td>500–550 GSM</td><td>70×140 cm</td></tr>
                  <tr><td>Hand Towels</td><td>2×</td><td>450–500 GSM</td><td>40×70 cm</td></tr>
                  <tr><td>Bath Mats</td><td>2×</td><td>900–1100 GSM</td><td>50×80 cm</td></tr>
                </tbody>
              </table>
            </div>
            <div className="hat-pack__foot">
              <a href="#contact" className="hat-pack__btn">Request a Quote</a>
            </div>
          </div>
          <div className="hat-pack hat-pack--featured">
            <div className="hat-pack__badge">Most Popular</div>
            <div className="hat-pack__top hat-pack__top--navy">
              <p className="hat-pack__tier">Operator Pack</p>
              <p className="hat-pack__for">2-bedroom properties</p>
              <p className="hat-pack__count">32 pieces</p>
            </div>
            <div className="hat-pack__body">
              <table className="hat-pack__tbl">
                <thead><tr><th>Item</th><th>Qty</th><th>Spec</th><th>Size</th></tr></thead>
                <tbody>
                  <tr><td>Fitted Sheets</td><td>4×</td><td>250–300 TC</td><td>153×203 / 183×203 cm</td></tr>
                  <tr><td>Flat Sheets</td><td>4×</td><td>250–300 TC</td><td>250×290 / 280×290 cm</td></tr>
                  <tr><td>Pillowcases</td><td>8×</td><td>250–300 TC</td><td>50×75 cm</td></tr>
                  <tr><td>Bath Towels</td><td>8×</td><td>500–550 GSM</td><td>70×140 cm</td></tr>
                  <tr><td>Hand Towels</td><td>4×</td><td>450–500 GSM</td><td>40×70 cm</td></tr>
                  <tr><td>Bath Mats</td><td>4×</td><td>900–1100 GSM</td><td>50×80 cm</td></tr>
                </tbody>
              </table>
            </div>
            <div className="hat-pack__foot">
              <a href="#contact" className="hat-pack__btn hat-pack__btn--light">Request a Quote</a>
            </div>
          </div>
          <div className="hat-pack">
            <div className="hat-pack__top hat-pack__top--teal">
              <p className="hat-pack__tier">Property Pack</p>
              <p className="hat-pack__for">3-bed+ / boutique hotel</p>
              <p className="hat-pack__count">48 pieces</p>
            </div>
            <div className="hat-pack__body">
              <table className="hat-pack__tbl">
                <thead><tr><th>Item</th><th>Qty</th><th>Spec</th><th>Size</th></tr></thead>
                <tbody>
                  <tr><td>Fitted Sheets</td><td>6×</td><td>250–300 TC</td><td>153×203 / 183×203 cm</td></tr>
                  <tr><td>Flat Sheets</td><td>6×</td><td>250–300 TC</td><td>250×290 / 280×290 cm</td></tr>
                  <tr><td>Pillowcases</td><td>12×</td><td>250–300 TC</td><td>50×75 cm</td></tr>
                  <tr><td>Bath Towels</td><td>12×</td><td>500–550 GSM</td><td>70×140 cm</td></tr>
                  <tr><td>Hand Towels</td><td>6×</td><td>450–500 GSM</td><td>40×70 cm</td></tr>
                  <tr><td>Bath Mats</td><td>6×</td><td>900–1100 GSM</td><td>50×80 cm</td></tr>
                </tbody>
              </table>
            </div>
            <div className="hat-pack__foot">
              <a href="#contact" className="hat-pack__btn">Request a Quote</a>
            </div>
          </div>
        </div>
        <p className="hat-packs__note">
          Bath mat sizes vary across Australian commercial suppliers (50×70 cm to 60×80 cm).
          Exact size confirmed prior to ordering.{" "}
          <a href="mailto:info@harbourarchtrading.com.au">Contact us</a>.
        </p>
      </div>
    </section>
  );
}