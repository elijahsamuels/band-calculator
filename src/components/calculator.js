import React, { useState, useEffect } from "react";

function Calculator() {

  const [baseTravelCostPerMusician, setBaseTravelCostPerMusician] = useState(50);
  const [baseTravelCostPerMusicianMarkup, setBaseTravelCostPerMusicianMarkup] = useState(60);

  const [baseTravelTime, setBaseTravelTime] = useState(0);
  const [musicianCount, setMusicianCount] = useState(5);

  const [soundsystemCost, setSoundsystemCost] = useState(200);
  const [soundsystemCostMarkup, setSoundsystemCostMarkup] = useState(250);

  const [bandLeaderCost, setBandLeaderCost] = useState(50);
  const [bandLeaderCostMarkup, setBandLeaderCostMarkup] = useState(100);

  const [baseMusicianRate, setBaseMusicianRate] = useState(350);
  const [baseMusicianRateMarkup, setBaseMusicianRateMarkup] = useState(450);

  const [bandCost, setBandCost] = useState(
		// console.log( typeof musicianCount, typeof baseMusicianRate, typeof musicianCount, typeof baseTravelCostPerMusician, typeof baseTravelTime, typeof soundsystemCost, typeof bandLeaderCost),
    (musicianCount * baseMusicianRate) + (musicianCount * baseTravelCostPerMusician * baseTravelTime) + (soundsystemCost + bandLeaderCost)
  );
  const [bandCostMarkup, setBandCostMarkup] = useState(
    musicianCount * baseMusicianRateMarkup +
      musicianCount * baseTravelCostPerMusicianMarkup * baseTravelTime +
      (soundsystemCostMarkup + bandLeaderCostMarkup)
  );

  const [commission1, setCommission1] = useState(100);
  const [commission2, setCommission2] = useState(100);
  const [commissionBonus, setCommissionBonus] = useState(0);

  const [subTotal, setSubTotal] = useState();
  const [subTotalMarkup, setSubTotalMarkup] = useState();

  const [taxRate, setTaxRate] = useState(0.08);
  const [taxRateMarkup, setTaxRateMarkup] = useState(0.08);

  const [totalPrice, setTotalPrice] = useState(
    bandCost + (commission1 + commission2) * taxRate
  );
  const [totalPriceMarkup, setTotalPriceMarkup] = useState(
    bandCostMarkup + (commission1 + commission2) * taxRateMarkup
  );

  useEffect(() => {
    setBandCost(
      (musicianCount * baseMusicianRate) +
        (musicianCount * baseTravelCostPerMusician * baseTravelTime) +
        (soundsystemCost + bandLeaderCost)
    );
  }, [ bandLeaderCost,baseMusicianRate, baseTravelCostPerMusician, baseTravelTime, musicianCount, soundsystemCost ]);

  useEffect(() => {
    setBandCostMarkup(
			(musicianCount * baseMusicianRateMarkup) +
      (musicianCount * baseTravelCostPerMusicianMarkup * baseTravelTime) +
      (soundsystemCostMarkup + bandLeaderCostMarkup)
    );
  }, [ bandLeaderCostMarkup, baseMusicianRateMarkup, baseTravelCostPerMusicianMarkup, baseTravelTime, musicianCount, soundsystemCostMarkup ]);

  useEffect(() => {
    setSubTotal(
      bandCost + (commission1 + commission2)
    );
  }, [bandCost, commission1, commission2]);

  useEffect(() => {
    setSubTotalMarkup(
      bandCostMarkup + (commission1 + commission2)
    );
  }, [bandCostMarkup, commission1, commission2]);

  useEffect(() => {
    setTotalPrice(subTotal + (subTotal * taxRate));
  }, [subTotal, taxRate]);

  useEffect(() => {
    setTotalPriceMarkup(subTotalMarkup + (subTotalMarkup * taxRateMarkup));
  }, [subTotalMarkup, taxRateMarkup]);


	// const changeBaseMusicianRateMarkup = (e) => {
	// 	console.log(setBaseMusicianRateMarkup(e.target.value.includes("%") ? parseInt(e.target.value)/100 : e.target.value))
	// 	setBaseMusicianRateMarkup(parseInt(e.target.value) || 0)
	// }

	const changeTaxRate = (e) => {
		// console.log(setBaseMusicianRateMarkup(e.target.value.includes("%") ? parseInt(e.target.value)/100 : e.target.value))
		setTaxRate(e.target.value.includes("%") ? (parseInt(e.target.value)/100 || 0 ) : (parseInt(e.target.value)/100 || 0 ))
	}
	const changeTaxRateMarkup = (e) => {
		// console.log(setBaseMusicianRateMarkup(e.target.value.includes("%") ? parseInt(e.target.value)/100 : e.target.value))
		setTaxRateMarkup(e.target.value.includes("%") ? (parseInt(e.target.value)/100 || 0 ) : (parseInt(e.target.value)/100 || 0 ))
	}

	const completionBonusReturn = () => {
		if (commissionBonus > 0) {
			return <tr>
				<td align="left">Completion Bonus {commissionBonus}%
					{" "}:</td>
				<td align="left">+${Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100))}</td>
				<td align="left">+${Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100))}</td>
			</tr>
		} 
	}

  return (
    <React.Fragment>
      <h1>Calculator</h1>

      <table align="center">
			<thead>
          <tr>
            <th align="left">Item</th>
            <th align="left">Cost</th>
            <th align="left">Cost Markup</th>
            {/* <th>Notes</th> */}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td align="left">Musician Base Rate:</td>
            <td>
              <input
								type="number"
                name="base-musician-rate--time"
                placeholder={`$${baseMusicianRate}`}
                onChange={(e) => setBaseMusicianRate(parseInt(e.target.value) || 0)}
              />
            </td>
            <td>
						<input
								type="number"
                name="base-musician-rate-markup"
                placeholder={`$${baseMusicianRateMarkup}`}
								// onChange={(e) => changeBaseMusicianRateMarkup(parseInt(e)) || 0}
                onChange={(e) => setBaseMusicianRateMarkup(parseInt(e.target.value) || 0)}
              />
            </td>
          </tr>
					{/* if the string contains "%" */}

          <tr>
            <td align="left">Number of Musicians:</td>
            <td>
              <input
								type="number"
                name="number-of-musicians"
                placeholder={`${musicianCount}`}
                onChange={(e) => setMusicianCount(parseInt(e.target.value) || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Sound System Cost:</td>
            <td>
              <input
								type="number"
                name="soundsystemCost"
                placeholder={`$${soundsystemCost}`}
                onChange={(e) => setSoundsystemCost(parseInt(e.target.value) || 0)}
              />
            </td>
            <td>
              <input
								type="number"
                name="soundsystemCost"
                placeholder={`$${soundsystemCostMarkup}`}
                onChange={(e) => setSoundsystemCostMarkup(parseInt(e.target.value) || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Band Leader Cost:</td>
            <td>
              <input
								type="number"
                name="bandLeaderCost"
                placeholder={`$${bandLeaderCost}`}
                onChange={(e) => setBandLeaderCost(parseInt(e.target.value) || 0)}
              />
            </td>
            <td>
              <input
								type="number"
                name="bandLeaderCost"
                placeholder={`$${bandLeaderCostMarkup}`}
                onChange={(e) => setBandLeaderCostMarkup(parseInt(e.target.value) || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Travel Rate:</td>
            <td>
              <input
								type="number"
                name="travel-cost"
                placeholder={`$${baseTravelCostPerMusician}`}
                onChange={(e) => setBaseTravelCostPerMusician(parseInt(e.target.value) || 0)}
              />
            </td>
            <td>
              <input
								type="number"
                name="travel-cost"
                placeholder={`$${baseTravelCostPerMusicianMarkup}`}
                onChange={(e) => setBaseTravelCostPerMusicianMarkup(parseInt(e.target.value) || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Travel Time (hours):</td>
            <td>
              <input
								type="number"
                name="travel-time"
                placeholder={`${baseTravelTime}`}
                onChange={(e) => setBaseTravelTime(parseInt(e.target.value) || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Deposit Commission</td>
            <td>
              <input
								type="number"
                disabled
                name="deposit-commission"
                placeholder={`$${commission1}`}
                onChange={(e) => setCommission1(e.target.value || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Completion Commission</td>
            <td>
              <input
								type="number"
                disabled
                name="completion-commission"
                placeholder={`$${commission2}`}
                onChange={(e) => setCommission2(e.target.value || 0)}
              />
            </td>
          </tr>

          <tr>
            {/* <td align="left">Completion Commission</td> */}
						<td align="left">Completion Bonus? <select value={commissionBonus} onChange={(e) => setCommissionBonus(e.target.value)}>
								<option value="0">0%</option>
								<option value="1">1%</option>
								<option value="2">2%</option>
								<option value="3">3%</option>
								<option value="4">4%</option>
								<option value="5">5%</option>
								<option value="6">6%</option>
								<option value="7">7%</option>
								<option value="8">8%</option>
								<option value="9">9%</option>
								<option value="10">10%</option>
								<option value="11">11%</option>
								<option value="12">12%</option>
								<option value="13">13%</option>
								<option value="14">14%</option>
								<option value="15">15%</option>
								<option value="16">16%</option>
								<option value="17">17%</option>
								<option value="18">18%</option>
								<option value="19">19%</option>
								<option value="20">20%</option>
							</select>
							{" "}:</td>
            <td>
              <input
								type="number"
                disabled
                name="completion-commission"
                placeholder={`$${commission2}`}
                onChange={(e) => setCommission2(e.target.value || 0)}
              />
            </td>
          </tr>

          <tr>
            <td align="left">Tax Rate:</td>
            <td>
              <input
                name="tax-rate"
                placeholder={`${taxRate}%`}
                onChange={(e) => changeTaxRate(e)}
              />
            </td>
            <td>
              <input
                name="tax-rate-markup"
                placeholder={`${taxRateMarkup}%`}
                // onChange={(e) => setTaxRateMarkup(e.target.value)}
                onChange={(e) => changeTaxRateMarkup(e)}
              />
            </td>
          </tr>
        </tbody>
      </table>

			<br />

      <table align="center">
        <thead>
          <tr>
            <th align="left">Item</th>
            <th align="left">Cost</th>
            <th align="left">Cost Markup</th>
            {/* <th>Notes</th> */}
          </tr>
          <tr>
            <th align="left"></th>
            <th align="left">(Pay to band)</th>
            <th align="left">(Cost to client)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td align="left">Number of Musicians: </td>
            <td align="left">{musicianCount}</td>
            <td align="left">{musicianCount}</td>
          </tr>

          <tr>
            <td align="left">Musician Base Rate: </td>
            <td align="left">${baseMusicianRate}</td>
            <td align="left">${baseMusicianRateMarkup}</td>
          </tr>

          <tr>
            <td align="left">Sound System Cost: </td>
            <td align="left">${soundsystemCost}</td>
            <td align="left">${soundsystemCostMarkup}</td>
          </tr>

          <tr>
            <td align="left">Band Leader Cost: </td>
            <td align="left">${bandLeaderCost}</td>
            <td align="left">${bandLeaderCostMarkup}</td>
          </tr>

          <tr>
            <td align="left">Travel Cost (per musician): </td>
            <td align="left">${baseTravelCostPerMusician}</td>
            <td align="left">${baseTravelCostPerMusicianMarkup}</td>
          </tr>

          <tr>
            <td align="left">Travel Time (hours): </td>
            <td align="left">{baseTravelTime}</td>
            <td align="left">{baseTravelTime}</td>
          </tr>

          <tr>
            <td align="left">Band Cost: </td>
            <td align="left">
              <strong>${bandCost}</strong>
            </td>
            <td align="left">
							<strong>${bandCostMarkup}</strong>
            </td>
            {/* <td>({musicianCount} {parseInt(musicianCount) == 1 ? "musician" : "musicians"} * ${baseMusicianRate}) + ({baseTravelTime} hours * ${baseTravelCostPerMusician}) + ${soundsystemCost} + ${bandLeaderCost}</td> */}
          </tr>

          {/* <tr>
            <td align="left"></td>
            <td>
              ({musicianCount}{" "}
              {parseInt(musicianCount) == 1 ? "musician" : "musicians"} * $
              {baseMusicianRate}) + ({baseTravelTime} hours * $
              {baseTravelCostPerMusician}) + ${soundsystemCost} + $
              {bandLeaderCost}
            </td>
          </tr> */}

          <tr>
            <td align="left">Deposit Commission: </td>
            <td align="left">+${commission1}</td>
            <td align="left">+${commission1}</td>
          </tr>

          <tr>
            <td align="left">Completion Commission: </td>
            <td align="left">+${commission2}</td>
            <td align="left">+${commission2}</td>
          </tr>

					{completionBonusReturn()}
          {/* <tr>
            <td align="left">Completion Bonus {commissionBonus}%
							{" "}:</td>
            <td align="left">+${Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100))}</td>
            <td align="left">+${Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100))}</td>
          </tr> */}

          <tr>
            <td align="left">Subtotal: </td>
            <td align="left">
              <strong>${subTotal}</strong>
            </td>
            <td align="left">
              <strong>${subTotalMarkup}</strong>
            </td>
          </tr>

          <tr>
            <td align="left">Tax ({taxRate}%): </td>
            {/* <td align="left">${Math.ceil(subTotal * taxRate)}</td> */}
            <td align="left"></td>
            <td align="left">${Math.ceil(subTotalMarkup * taxRateMarkup)}</td>
          </tr>

          <tr>
            <td align="left">Total Cost: </td>
            <td align="left">
              <strong>${totalPrice}</strong>
            </td>
            <td align="left">
              <strong>${totalPriceMarkup}</strong>
            </td>
          </tr>
          <tr>
            <td align="left">Profit Margin: </td>
            <td align="left">
              <strong></strong>
            </td>
            <td align="left">
              <strong>${Math.floor(totalPriceMarkup - totalPrice - Math.floor((totalPriceMarkup - totalPrice)*(commissionBonus/100)))}</strong>
            </td>
            <td align="left">
              <p>(Band cost - client payment)</p>
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Calculator;
