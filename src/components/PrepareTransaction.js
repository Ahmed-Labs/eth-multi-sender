function PrepareTransaction() {
  return (
    <div className="mx-8 my-10">
      <label for="message" class="block mb-4 text-sm font-medium text-white">
        List of recipients and amounts
      </label>
      <textarea
        id="message"
        rows="10"
        wrap="off"
        class="resize-none focus-none block p-2.5 w-full text-sm text-gray-300 bg-blurple rounded-lg border border-lurple focus:outline-lurple"
        placeholder="0xb985F17830dDb118A5B61A0618981a47bFE72837,1.2"
      ></textarea>
    </div>
  );
}

export default PrepareTransaction;
