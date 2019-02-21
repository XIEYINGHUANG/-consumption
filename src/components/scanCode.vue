 <template>
     <div class="outsideBox">
        <div class="scanCode">
        <img src="../assets/newStyle/qrcode.jpg" alt="" class="qrcode" >           
         </div>
         <div class="text">
                <span class="describe">关注和+plus公众号享受更多惊喜</span>
         </div>
        

 </div>
    
</template>


<script>
 
 export default {
    //    components: {
    //     scanCode,
    //    }  
    
 }
</script>

<style scoped lang="scss">
  .scanCode {
      width: 50vw;
      /* height: 25vh; */
      /* bottom: -138vh; */
      /* position: fixed; */
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0vh;
      /* border: 1px solid #ccc; */
      margin-left:23.5%;
     
  }
  .scanCode .qrcode {
      width: 33vw;
      height: auto;    
  }
  .text {
      width: 100%;
      height: 80px;
      /* background-color: green; */
      /* margin-left: 20%; */
      margin-top: 2vh;
      text-align: center;
      align-items: center;
  }
  .text .describe {
     width: 60vw;
     height: 20vh;  
     font-size: 4.0vw;
    font-weight: 600;
     
  }

</style> 


