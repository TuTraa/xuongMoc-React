const HomeContract = () => {
    return ( 
        <>
            <div class="add_tt">
              <div class="ghe">
                <img src="../img/ghe.png" alt="" />
              </div>
              <div class="add_tt_in">
                <div class="text_l">
                  <p>Trải nghiệm dịch vụ</p>
                  <h6>Cùng Hoàng Hoan ngay</h6>
                  <div class="bottomSpnb"></div>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td class="nhaptt" width="200px">Nhập thông tin</td>
                    </tr>
                    <tr>
                      <td class="input1">
                        <input
                          type="text"
                          size="30"
                          name="userName"
                          id="userName"
                          placeholder="Emai/Số điện thoại"
                        />
                      </td>
                      <td class="input1"><input type="submit" name="" id="" value="Gửi" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </>
     );
}
 
export default HomeContract;