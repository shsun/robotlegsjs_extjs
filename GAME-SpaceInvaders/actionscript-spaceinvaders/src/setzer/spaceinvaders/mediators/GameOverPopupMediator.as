package setzer.spaceinvaders.mediators
{
	import robotlegs.bender.extensions.palidor.starlingIntegration.starlingViewMap.impl.StarlingMediator;

	import setzer.spaceinvaders.services.FlowService;
	import setzer.spaceinvaders.services.GameService;
	import setzer.spaceinvaders.views.GameOverPopup;

	import starling.events.Event;

	public class GameOverPopupMediator extends StarlingMediator
	{
		[Inject]
		public var view:GameOverPopup;

		[Inject]
		public var flowService:FlowService;

		[Inject]
		public var gameService:GameService;

		override public function initialize():void
		{
			eventMap.mapListener( view.homeButton, Event.TRIGGERED, homeButton_onTriggeredHandler );
			eventMap.mapListener( view.retryButton, Event.TRIGGERED, retryButton_onTriggeredHandler );
		}

		private function homeButton_onTriggeredHandler( e:Event ):void
		{
			flowService.setHomeView();
			view.removeFromParent();
		}

		private function retryButton_onTriggeredHandler( e:Event ):void
		{
			gameService.retryCommand();
			view.removeFromParent();
		}

		override public function destroy():void
		{
			eventMap.unmapListeners();
		}
	}
}
